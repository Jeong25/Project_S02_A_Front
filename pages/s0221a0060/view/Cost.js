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

  useEffect(() => {
    getData()
  }, [])

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
      Alert.alert('알림', '사용 제목을 입력해 주세요.')
      return
    }
    if (inputData.eventNm === '') {
      Alert.alert('알림', '행사명을 입력해 주세요.')
      return
    }
    if (inputData.usedDate === '') {
      Alert.alert('알림', '사용 일자를 입력해 주세요.')
      return
    }
    if (inputData.useAmount === '' || Number(inputData.useAmount) < 1) {
      Alert.alert('알림', '사용 금액을 입력해 주세요.')
      return
    }
    if (inputData.useReceiptName === '') {
      Alert.alert('알림', '첨부파일을 입력해 주세요.')
      return
    }
    if (SC === 0) {
      setSC(1)
      const headers = { 'Content-Type': 'multipart/form-data; boundary=someArbitraryUniqueString', };
      const body = { ...inputData, usedDate: dateState.confirmVal, "eventUserId": memberId, }
      console.log('Click Reg: ' + JSON.stringify(body, null, 4))
      const response = await registerEventCostReq(body, headers)
      if (response.status === 200) {
        Alert.alert('알림', '비용 청구 영수증 등록 되었습니다.')
        goback()
        setSC(0)
      }
    } else {
      Alert.alert('알림', '이미 작업을 요청하였으니, 잠시만 기다려주세요.')
      return
    }

  }

  const goback = async () => {
    // try {
    //   props.route.params.refresh()
    // } catch (error) {
    //   console.log(error)
    // }
    props.navigation.goBack()
  }

  const checkIosCamera = async () => {
    let options = {
      title: "Upload Prescription",
      takePhotoButtonTitle: "Take a Photo",
      chooseFromLibraryButtonTitle: "Select From Gallery",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      includeBase64: true
    };

    checkMultiple([
      PERMISSIONS.IOS.CAMERA,
      PERMISSIONS.IOS.PHOTO_LIBRARY,
      PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY
    ]).then(result => {
      if (result['ios.permission.CAMERA'] === "granted" && result['ios.permission.PHOTO_LIBRARY'] === "granted" && result['ios.permission.PHOTO_LIBRARY_ADD_ONLY'] === "granted") {
        AlertAsync(
          "사진을 선택해주세요.",
          "카메라로 촬영 혹은 파일을 선택해주세요.",
          [
            {
              text: '카메라',
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
              text: '파일',
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
      } else {
        AlertAsync(
          "카메라 권한이없습니다.",
          "권한을 직접 설정해주세요",
          [
            {
              text: '예',
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
              text: '아니오',
            },
          ],
          { cancelable: false })
      }
    }).catch(error => {
      console.log('PERMISSION ERROR : ', error)
    })
  }
  const checkAndCamera = async () => {
    let options = {
      title: "Upload Prescription",
      takePhotoButtonTitle: "Take a Photo",
      chooseFromLibraryButtonTitle: "Select From Gallery",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      includeBase64: true
    };

    const andGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    )

    if (andGranted === PermissionsAndroid.RESULTS.GRANTED || iosGranted) {
      await AlertAsync(
        "사진을 선택해주세요.",
        "카메라로 촬영 혹은 파일을 선택해주세요.",
        [
          {
            text: '카메라',
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
            text: '파일',
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
    } else {
      await AlertAsync(
        "카메라 권한이없습니다.",
        "권한을 직접 설정해주세요",
        [
          {
            text: '예',
            onPress: async () => {
              Linking.openSettings()
            }
          },
          {
            text: '아니오',
          },
        ],
        { cancelable: false })
    }
  }
  const ShowPicker = async () => {
    const phoneOs = Platform.OS
    if (phoneOs === 'ios') {
      checkIosCamera()
    } else {
      checkAndCamera()
    }
  }

  const getEventInfo = (params) => {
    setEventName(params.eventNm)
    setInputData({ ...inputData, eventId: params.eventId })
  }

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
              <TouchableOpacity onPress={goback} >
                <Image source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.topTitle}>비용작성</Text>
          </View>

          <View style={styles.inner}>
            <View style={styles.form}>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>사용제목</Text>
                <TextInput style={styles.input} onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} />
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>행사명</Text>
                <View style={styles.searchBtn} >
                  <TouchableOpacity onPressIn={() => props.navigation.navigate('EventList', { getEventInfo })} >
                    <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.input}
                  editable={false}
                  value={eventName}></TextInput>
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label} >사용일자</Text>
                <View style={styles.searchBtn} >
                  <TouchableOpacity onPressIn={() => openDateModal()}>
                    <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                  </TouchableOpacity>
                </View>
                <TextInput style={styles.input} editable={false} value={dateState.confirmVal}></TextInput>
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>사용금액</Text>
                <TextInput
                  style={styles.amountInput}
                  onChange={(e) => {
                    console.log(e.nativeEvent.text.replace(/,/gi, ""))
                    setInputData({ ...inputData, useAmount: e.nativeEvent.text.replace(/,/gi, "") })
                  }}
                  value={numberToCost(inputData?.useAmount)}
                  keyboardType={'number-pad'}
                />
                <Text style={styles.won}>원</Text>
              </View>
              <View style={styles.inputWrap}>
                <Text style={styles.label}>첨부파일</Text>
                <View style={styles.addBtn}>
                  <TouchableOpacity onPressIn={() => ShowPicker()}>
                    <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
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
                <Text style={styles.label}>사용내역</Text>
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
                  <Text style={styles.buttonText}>저장</Text>
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
    </Fragment>


  )
}

export default Cost