import { Text, View, TextInput, Image, Keyboard, Dimensions, SafeAreaView, PermissionsAndroid, Alert, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, requestMultiple, checkMultiple } from "react-native-permissions";
import { styleSheet } from './stylesheet';
import React, { useState, useEffect, Fragment } from 'react';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { eventCostReq, patchEventCostReq, deleteEventCostReq } from '../store/store';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AlertAsync from 'react-native-alert-async';
import Footer from '../../common/footer/Footer';
import numberToCost from '../../common/util/numberToCost';
import ImageModal from 'react-native-image-modal';
import FastImage from 'react-native-fast-image';
import CustomAlert from '../../common/Alert/Toast/Alert';


const CostModify = (props) => {

  const height = Dimensions.get('window').height
  const styles = styleSheet()
  const [memberId, setMemberId] = useState('')
  const [eventName, setEventName] = useState('')
  const [dateState, setDateState] = useState({
    viewModal: false,
    confirmVal: '',
    confirmDate: new Date()
  })
  const [inputData, setInputData] = useState({
    "eventId": "",
    "eventUseId": "",
    "eventUserId": "",
    "useAmount": "",
    "useComment": "",
    "base64String": "",
    "useReceiptName": "",
    "useSubject": "",
    "usedDate": ""
  })
  const [headerData, setHeaderData] = useState({})
  const [detailData, setDetailData] = useState([])
  const [imgUri, setImgUri] = useState('')
  const [SC, setSC] = useState(0)
  const preFix = 'https://s3.ap-northeast-2.amazonaws.com/s02-bucket/storage/img/s02/'
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
    return true
  }

  const getData = async () => {
    const localMemberId = await AsyncStorage.getItem('memberId')
    if (localMemberId) {
      setMemberId(localMemberId)
    }
    const { data } = props.route.params
    setInputData({ ...data })
    setDateState({ ...dateState, confirmDate: new Date(data.usedDate), confirmVal: data.usedDate })
    if (!data.eventUseId) {
      cusAlert('Error', '', false)
      props.navigation.goBack()
    } else {
      const res = await eventCostReq(data.eventUseId)
      setHeaderData(res.data.data.header)
      setDetailData(res.data.data.detail)
      setEventName(res.data.data.header.eventNm)
      setImgUri(`${preFix}${res.data.data.header?.useReceiptId}`)
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

  const modifyEvent = async () => {
    if (inputData.useSubject === '') {
      cusAlert('?????? ????????? ????????? ?????????.', '', false)
      return
    }
    if (inputData.useAmount === '') {
      cusAlert('?????? ????????? ????????? ?????????.', '', false)
      return
    }
    if (inputData?.base64String) {
      const body = { ...inputData, usedDate: dateState.confirmVal, }
      delete body.payName
      delete body.useProStatus
      delete body.useProStatusNm
      if (SC === 0) {
        setSC(1)
        const response = await patchEventCostReq(body)
        if (response.status === 200) {
          cusAlert('?????? ?????? ????????? ?????? ???????????????.', 'check', true)
          setSC(0)
        }
      } else {
        cusAlert('?????? ????????? ??????????????????, ????????? ??????????????????.', '', false)
        return
      }
    } else {
      const body = { ...inputData, usedDate: dateState.confirmVal, base64String: '' }
      delete body.payName
      delete body.useProStatus
      delete body.useProStatusNm
      if (SC === 0) {
        setSC(1)
        const response = await patchEventCostReq(body)
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

  }

  const deleteEvent = async () => {
    await AlertAsync(
      "?????? ???????????? ?????????????????????????",
      "",
      [
        {
          text: '???',
          onPress: async () => {
            const { eventUseId } = inputData
            const response = await deleteEventCostReq(eventUseId)
            if (response.status === 200) {
              await AlertAsync('?????? ?????? ???????????????.')
              await goback()
            }
          }
        },
        {
          text: '?????????',
        },
      ],
      { cancelable: false }
    )
  }

  const goback = async () => {
    // try {
    //   props.route.params.refresh()
    // } catch (error) {
    //   console.log(error)
    // }
    props.navigation.goBack()
  }

  // const ShowPicker = () => {
  //   //launchImageLibrary : ????????? ?????? ??????
  //   launchImageLibrary({}, (res) => {
  //     alert(res.assets[0].uri)
  //     const formdata = new FormData()
  //     formdata.append('file', res.assets[0].uri);
  //     console.log(res);
  //   }).catch(e => { console.log(e) })
  // }

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
  }, [props])

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>
          <KeyboardAwareScrollView
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
                <TouchableOpacity onPress={goback} >
                  <Image source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.topTitle}>??????????????????</Text>
            </View>
            <View style={styles.inner}>
              <View style={styles.contentsWrap}>
                <View style={styles.contentsLayer}>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>?????????</Text>
                    <Text style={styles.centerAlignText}>
                      {headerData?.userName}
                    </Text>
                  </View>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>????????????</Text>
                    <Text style={styles.centerAlignText}>{headerData?.useProStatusNm}</Text>
                  </View>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>????????????</Text>
                  <TextInput style={styles.longInput}
                    onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} value={inputData?.useSubject} />
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>?????????</Text>
                  <TextInput
                    style={styles.longInput}
                    editable={false}
                    value={eventName}></TextInput>
                  <View style={styles.searchBtn} >
                    <TouchableOpacity onPressIn={() => props.navigation.navigate('EventList', { getEventInfo, getInfo: true })}>
                      <ReactImage source={require('../../common/img/magnifying-glass.png')} style={styles.searchIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.contentsLayer}>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>????????????</Text>
                    <View style={styles.inputWrap}>
                      <TextInput style={styles.modifyDateText} editable={false} value={inputData.usedDate}></TextInput>
                      <View style={styles.dateSearchBtn} >
                        <TouchableOpacity onPressIn={() => openDateModal()} >
                          <ReactImage source={require('../../common/img/magnifying-glass.png')} style={styles.searchIcon} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.contentsInner}>
                    <View style={styles.inputWrap}>
                      <Text style={styles.label}>????????????</Text>
                      <TextInput style={styles.rightAlignText} onChange={(e) => setInputData({ ...inputData, useAmount: e.nativeEvent.text.replace(/,/g, '') })} value={`${numberToCost(inputData.useAmount)}`} />
                      <Text style={styles.won}>???</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>????????????</Text>
                  {/* <TextInput style={styles.fileInput} value={inputData.useReceiptName}></TextInput> */}
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
                  <View style={styles.addBtn}>
                    <TouchableOpacity onPressIn={() => ShowPicker()}>
                      <ReactImage source={require('../../common/img/plus-w.png')} style={styles.addIcon} ></ReactImage>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>????????????</Text>
                  <TextInput
                    style={styles.historyInput}
                    multiline={true}
                    onChange={(e) => setInputData({ ...inputData, useComment: e.nativeEvent.text })}
                    value={inputData.useComment}
                  />
                </View>
              </View>
            </View>
            <View style={styles.renderTitleWrap}>
              <Text style={styles.renderTitle}>?????? ??????</Text>
            </View>
            {detailData.length > 0 ?
              detailData.map((v, i) => (
                <View key={i}>
                  <View style={styles.renderInner}>
                    <View style={styles.contentsLayer}>
                      <View style={styles.RcontentsInner}>
                        <Text style={styles.label}>??????</Text>
                        <Text style={styles.shortInput}>{v.paiedName}</Text>
                      </View>
                      <View style={styles.RcontentsInner}>
                        <Text style={styles.label}>??????</Text>
                        <Text style={styles.shortInput}>{v.payResultNm}</Text>
                      </View>
                      <View style={styles.RcontentsInner}>
                        <Text style={styles.label}>????????????</Text>
                        <Text style={styles.centerAlignText}>{v.payDate}</Text>
                      </View>
                    </View>
                    <View style={styles.contents}>
                      <Text style={styles.label}>????????????</Text>
                      <Text style={styles.RhistoryInput}>{v.payComment}</Text>
                    </View>
                  </View>
                  <View style={styles.cellDivider}></View>
                </View>
              )) :
              <View>
              </View>}
            {headerData?.useProStatus === 'B' || headerData?.useProStatus === 'C' || headerData?.useProStatus === 'D' ?
              <View style={styles.modifyBtnWrap}></View>
              :
              <View style={styles.modifyBtnWrap}>
                <TouchableOpacity onPress={modifyEvent}>
                  <View style={styles.requestBtn}>
                    <Text style={styles.btnText}>??????</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteEvent}>
                  <View style={styles.delBtn}>
                    <Text style={styles.btnText}>??????</Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
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
        </View>
        
      </SafeAreaView>
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}>
      </SafeAreaView>
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

export default CostModify