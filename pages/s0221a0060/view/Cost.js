import { Text, View, TextInput, Image, Keyboard, PermissionsAndroid, Linking, Dimensions, SafeAreaView, Alert, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, requestMultiple, checkMultiple } from "react-native-permissions";
import { styleSheet } from './stylesheet';
import React, { useState, useEffect, Fragment } from 'react';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AlertAsync from 'react-native-alert-async';
import { registerEventCostReq } from '../store/store';
import Footer from '../../common/footer/Footer';
import numberToCost from '../../common/util/numberToCost';
import ImageModal from 'react-native-image-modal';
import FastImage from 'react-native-fast-image';
import CustomAlert from '../../common/Alert/Toast/Alert';


const Cost = (props) => {
  const styles = styleSheet()
  const [memberName, setMemberName] = useState('')
  const [memberId, setMemberId] = useState('')
  const [mobileId, setMobileId] = useState('')
  const [eventName, setEventName] = useState('')
  const [dateState, setDateState] = useState({
    viewModal: false,
    confirmVal: '',
    confirmDate: new Date()
  })
  const [inputData, setInputData] = useState({
    "eventId": "",
    "useAmount": "",
    "useComment": "",
    "useProStatus": "A",
    "base64String": "",
    "useReceiptName": "",
    "useSubject": "",
    "usedDate": ""
  })
  const [imgUri, setImgUri] = useState('')
  const [SC, setSC] = useState(0)
  const size = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
  }

  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertConfirm, setAlertConfirm] = useState(false)
  const [alertImage, setAlertImage] = useState('info')
  const [alertUseFunc, setAlertUseFunc] = useState(false)

  const cusAlert = async (message, image, use) => {
    setAlertMessage(message)
    setAlertImage(image)
    setAlertConfirm(false)
    setAlertUseFunc(use)
    setAlertOpen(true)
  }

  const getData = async () => {
    const localName = await AsyncStorage.getItem('memberName')
    const localMemberId = await AsyncStorage.getItem('memberId')
    const localMobileId = await AsyncStorage.getItem('mobileId')
    if (localName) {
      setMemberName(localName)
      setMemberId(localMemberId)
      setMobileId(localMobileId)
    }
  }

  const openDateModal = () => {
    Keyboard.dismiss()
    setDateState({ ...dateState, viewModal: true })
  }

  const confirmDateChange = (val) => {
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    setDateState({ ...dateState, confirmDate: val, confirmVal: `${year}-${month}-${date}`, viewModal: false })
    setInputData({ ...inputData, usedDate: `${year}-${month}-${date}` })
  }

  const regist = async () => {
    if (inputData.useSubject === '') {
      cusAlert('?????? ????????? ????????? ?????????.', '', false)
      return
    }
    if (eventName === '') {
      cusAlert('???????????? ????????? ?????????.', '', false)
      return
    }
    if (inputData.usedDate === '') {
      cusAlert('?????? ????????? ????????? ?????????.', '', false)
      return
    }
    if (inputData.useAmount === '') {
      cusAlert('?????? ????????? ????????? ?????????.', '', false)
      return
    }
    if (inputData.useReceiptName === '') {
      cusAlert('??????????????? ????????? ?????????.', '', false)
      return
    }
    if (SC === 0) {
      setSC(1)
      const headers = { 'Content-Type': 'multipart/form-data; boundary=someArbitraryUniqueString', };
      const body = { ...inputData, usedDate: dateState.confirmVal, "eventUserId": memberId, }
      const response = await registerEventCostReq(body, headers)
      if (response.status === 200) {
        cusAlert('?????? ?????? ????????? ?????? ???????????????.', 'check', true)
        setSC(0)
      } else {
        cusAlert('?????? ??? ?????? ?????????????????? ??????????????? ????????? ?????????.', '', false)
      }
    } else {
      cusAlert('?????? ????????? ??????????????????, ????????? ??????????????????.', '', false)
      return
    }

  }

  const checkAndAuth = async () => {
    const andGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    )
    if (andGranted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      return false
    }
  }
  const checkIosAuth = async () => {
    checkMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY
    ]).then(result => {
      if (result['ios.permission.CAMERA'] === "granted" && result['ios.permission.PHOTO_LIBRARY'] === "granted" && result['ios.permission.PHOTO_LIBRARY_ADD_ONLY'] === "granted") {
        return true
      } else {
        return false
      }
    }).catch(error => {
      console.log('PERMISSION ERROR : ', error)
    })
  }
  const launchPicker = async () => {
    let options = {
      title: "Upload Prescription",
      takePhotoButtonTitle: "Take a Photo",
      chooseFromLibraryButtonTitle: "Select From Gallery",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      includeBase64: true
    }

    await AlertAsync(
      "????????? ??????????????????.",
      "???????????? ?????? ?????? ????????? ??????????????????.",
      [
        {
          text: '?????????',
          onPress: async () => {
            launchCamera({ saveToPhotos: true, includeBase64: true }, async (res) => {
              let fileNm = res.assets[0].fileName.split('-')
              setInputData({
                ...inputData,
                base64String: res.assets[0].base64,
                useReceiptName: fileNm[fileNm.length - 1]
              })
              setImgUri(`file://${res.assets[0].uri.split('//').pop()}`)
            }).catch((e) => {
              console.log(e)
            })
          }
        },
        {
          text: '??????',
          onPress: async () => {
            launchImageLibrary(options, async (res) => {
              let fileNm = res.assets[0].fileName.split('-')
              setInputData({
                ...inputData,
                base64String: res.assets[0].base64,
                useReceiptName: fileNm[fileNm.length - 1]
              })
              setImgUri(`file://${res.assets[0].uri.split('//').pop()}`)
            }).catch((e) => {
              console.log(e)
            })
          }
        },
      ],
      { cancelable: true })
  }
  const ShowPicker = async () => {
    const phoneOs = Platform.OS
    if (phoneOs === 'ios') {
      const auth = checkIosAuth()
      if (auth) {
        launchPicker()
      } else {
        AlertAsync(
          "????????? ?????????????????????.",
          "????????? ?????? ??????????????????",
          [
            {
              text: '???',
              onPress: async () => {
                requestMultiple([
                  PERMISSIONS.IOS.CAMERA,
                  PERMISSIONS.IOS.PHOTO_LIBRARY,
                  PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
                ]).then(result => {
                  console.log('MULTIPLE REQUEST RESPONSE2 : ', result)
                })
              }
            },
            {
              text: '?????????',
            },
          ],
          { cancelable: false })
      }
    } else {
      const auth = checkAndAuth()
      if (auth) {
        launchPicker()
      } else {
        await AlertAsync(
          "????????? ?????????????????????.",
          "????????? ?????? ??????????????????",
          [
            {
              text: '???',
              onPress: async () => {
                Linking.openSettings()
              }
            },
            {
              text: '?????????',
            },
          ],
          { cancelable: false })
      }
    }
  }

  const getEventInfo = (params) => {
    setEventName(params.eventNm)
    setInputData({ ...inputData, eventId: params.eventId })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <KeyboardAwareScrollView
          style={styles.wrap}
          resetScrollToCoords={{ x: 0, y: 0 }}
          enableOnAndroid={true}
          scrollEnabled={true}
          scrollToOverflowEnabled={true}
          enableAutomaticScroll={true}
          keyboardShouldPersistTaps='always'
          nestedScrollEnabled={true}
        >
          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()} >
                <Image source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.topTitle}>????????????</Text>
          </View>
          <View style={styles.inner}>
            <View style={styles.form}>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>????????????</Text>
                <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} />
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>?????????</Text>
                <View style={styles.searchBtn} >
                  <TouchableOpacity onPressIn={() => props.navigation.navigate('EventList', { getEventInfo, getInfo: true })} >
                    <ReactImage source={require('../../common/img/magnifying-glass.png')} style={styles.searchIcon} />
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.input}
                  editable={false}
                  value={eventName}></TextInput>
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label} >????????????</Text>
                <View style={styles.searchBtn} >
                  <TouchableOpacity onPressIn={() => openDateModal()}>
                    <ReactImage source={require('../../common/img/magnifying-glass.png')} style={styles.searchIcon} />
                  </TouchableOpacity>
                </View>
                <TextInput style={styles.input} editable={false} value={dateState.confirmVal}></TextInput>
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>????????????</Text>
                <TextInput
                  style={styles.amountInput}
                  onChange={(e) => {
                    setInputData({ ...inputData, useAmount: e.nativeEvent.text.replace(/,/gi, "") })
                  }}
                  value={numberToCost(inputData?.useAmount)}
                  keyboardType={'number-pad'}
                />
                <Text style={styles.won}>???</Text>
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>????????????</Text>
                <View style={styles.addBtn}>
                  <TouchableOpacity onPressIn={() => ShowPicker()}>
                    <ReactImage source={require('../../common/img/plus-w.png')} style={styles.addIcon} ></ReactImage>
                  </TouchableOpacity>
                </View>
                <View style={styles.fileBox}>
                  <FastImage
                    style={{
                      width: 40,
                      height: 40,
                    }}
                    source={{ uri: imgUri }}
                    resizeMethod="resize">
                    <ImageModal
                      resizeMode='contain'
                      style={{
                        width: size.windowWidth,
                        height: size.windowHeight
                      }}
                      source={{ uri: imgUri }}
                    />
                  </FastImage>
                </View>
              </View>
              <View>
                <Text style={styles.label}>????????????</Text>
                <TextInput
                  style={styles.textfield}
                  multiline={true}
                  onChange={(e) => setInputData({ ...inputData, useComment: e.nativeEvent.text })}
                />
              </View>
            </View>
            <View style={styles.btnWrap}>
              <TouchableOpacity onPress={regist}>
                <View style={styles.requestBtn}>
                  <Text style={styles.buttonText}>??????</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <DateTimePickerModal
            isVisible={dateState.viewModal}
            mode="date"
            onConfirm={(a) => confirmDateChange(a)}
            onCancel={() =>
              setDateState({ ...dateState, viewModal: false })
            }
            date={dateState.confirmDate}
          />
        </KeyboardAwareScrollView>
       
      </SafeAreaView>
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <CustomAlert
          openModal={alertOpen}
          confirm={alertConfirm}
          message={alertMessage}
          image={alertImage}
          CusFunc={() => props.navigation.goBack()}
          useFunc={alertUseFunc}
          onClose={() => setAlertOpen(false)}
        />
    </Fragment>
  )
}

export default Cost