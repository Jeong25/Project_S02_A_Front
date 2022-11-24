import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Alert, Dimensions, Image as ReactImage, Keyboard, LogBox, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Footer from '../../common/footer/Footer';
import numberToCost from '../../common/util/numberToCost';
import { regEventReq, deptInfoReq } from '../../DepReg/store/store';
import { styleSheet } from './styleSheet';
import CustomAlert from '../../common/Alert/Toast/Alert';

const Tempo = (props) => {

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
  ]);

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])
  const year = new Date().getFullYear();
  let keyboardSub = null;

  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)
  const [privacyAgree, setPrivacyAgree] = useState(true)
  const [dateState, setDateState] = useState({
    viewModal: false,
    fromToFlag: '',
    confirmFromDate: new Date(new Date().setFullYear(new Date().getFullYear(), 0, 1)),
    confirmToDate: new Date(new Date().setFullYear(new Date().getFullYear(), 11, 31)),
  })
  const [inputData, setInputData] = useState({
    eventNm: '',
    eventLoc: '',
    eventHostId: 0,
    eventBudgetAmount: null,
    eventStartDate: `${year}-01-01`,
    eventEndDate: `${year}-12-31`,
    eventComment: '',
    eventStatus: 'A',

    payFlag: 'Y',
    eventFinalFlag: 'Y',
    eventPayDept: null,
    defaultEventFlag: 'N',
    eventCode: null,
    eventHostName: '',

    orgId: '',
    eventRegId: '',
    highEventId: '',
    eventLevel: '',
    eventTp: '',
  })

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

  const blurTextInput = () => {
    if (isFocus) {
      Keyboard.dismiss()
      setIsFoucs(false)
      setheightMagnifi(1.2)
    }
  }

  const checkStatus = () => {
    setPrivacyAgree(!privacyAgree)
    if (privacyAgree) {
      setInputData({ ...inputData, eventStatus: 'B' })
    } else {
      setInputData({ ...inputData, eventStatus: 'A' })
    }
    Keyboard.dismiss()
  }

  const regEvent = async () => {
    if (inputData.eventNm === '') {
      cusAlert('행사명을 작성해주세요.', '', false)
      return
    }
    if (inputData.eventLevel === 0 || inputData.eventLevel === 1) {
      if (inputData.eventHostId === 0) {
        cusAlert('책임자를 선택해주세요.', '', false)
        return
      }
    }
    try {
      if (props.route.params.eventId) {
        const res = await regEventReq(props.route.params.eventId, inputData)
        if (res.data.status === 200) {
          cusAlert(res.data.massage, 'check', true)
        }
      } else {
        const res = await regEventReq(0, inputData)
        if (res.data.status === 200) {
          cusAlert(res.data.massage, 'check', true)
        }
      }
    } catch (error) {
      cusAlert('오류 발생, 관리자에게 문의해주세요.', '', true)
    }
  }

  const openDateModal = (flag) => {
    setDateState({ ...dateState, viewModal: true, fromToFlag: flag })
  }
  const confirmDateChange = (val, flag) => {
    if (flag === 'from') {
      setDateState({ ...dateState, confirmFromVal: convertDateToVal(val), confirmFromDate: val, viewModal: false })
      setInputData({ ...inputData, eventStartDate: convertDateToVal(val) })
    } else {
      setDateState({ ...dateState, confirmToVal: convertDateToVal(val), confirmToDate: val, viewModal: false })
      setInputData({ ...inputData, eventEndDate: convertDateToVal(val) })
    }
  }
  const convertDateToVal = (val) => {
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    return `${year}-${month}-${date}`
  }

  useEffect(() => {
    const callData = async () => {
      const localOrgId = await AsyncStorage.getItem('orgId')
      const localMemId = await AsyncStorage.getItem('memberId')
      const highEvId = props.route.params.highEvId
      const eventLv = props.route.params.eventLv
      const eventTp = props.route.params.eventTp
      setInputData({ ...inputData, orgId: localOrgId, eventRegId: localMemId, highEventId: highEvId, eventLevel: eventLv, eventTp: eventTp })
    }
    const callInfo = async () => {
      const eventId = props.route.params.eventId
      const res = await deptInfoReq(eventId)
      res.eventHostName = res.memberName
      setInputData(res)
    }
    if (props.route.params.eventId) {
      callInfo()
    } else {
      callData()
    }
  }, [])

  useEffect(() => {
    keyboardSub = Keyboard.addListener('keyboardDidHide', blurTextInput)
    return () => {
      keyboardSub?.remove()
    }
  }, [isFocus])

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>

          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{props.route.params.eventTp === 'D' ? '부서등록' : '행사등록'}</Text>
          </View>
          <ScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            enableOnAndroid={true}
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            keyboardShouldPersistTaps='always'
            nestedScrollEnabled={true}
          >
            <View style={styles.contentsWrap}>
              <View style={styles.form}>
                <View style={styles.layer}>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>{props.route.params.eventTp === 'D' ? '부서명' : '행사명'}</Text>
                    <TextInput style={styles.depInfo}
                      placeholder={props.route.params.eventTp === 'D' ? '부서명' : '행사명'}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onChange={(e) => setInputData({ ...inputData, eventNm: e.nativeEvent.text })}
                      value={inputData.eventNm}
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>{props.route.params.eventTp === 'D' ? '부서코드' : '행사코드'}</Text>
                    <TextInput style={styles.depInfo}
                      placeholder={props.route.params.eventTp === 'D' ? '부서코드' : '행사코드'}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      editable={false}
                      value={inputData.eventCode}
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.layer}>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>책임자</Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('SearchMemList', { inputData, setInputData })}>
                      <View
                        style={styles.depWrap}
                        pointerEvents="none">
                        <TextInput style={styles.depManagerInfo}
                          placeholder={"책임자"}
                          placeholderTextColor='rgba(0,0,0,0.2)'
                          editable={false}
                          onFocus={() => {
                            setheightMagnifi(1.5)
                            setIsFoucs(true)
                          }}
                          onBlur={() => { setheightMagnifi(1.2) }}
                          value={inputData.eventHostName}
                        >
                        </TextInput>
                        <ReactImage
                          source={require('../../common/img/magnifying-glass.png')} style={styles.searchIcon} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>예산금액</Text>
                    <View style={styles.depWrap}>
                      <TextInput style={styles.depAmountInfo}
                        onChange={(e) => setInputData({ ...inputData, eventBudgetAmount: e.nativeEvent.text.replace(/,/gi, "") })}
                        value={numberToCost(inputData?.eventBudgetAmount)}
                      >
                      </TextInput>
                      <Text style={styles.won}>
                        원
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.infoWrap}>
                  <Text style={styles.label}>행사장소</Text>
                  <TextInput style={styles.depInfo}
                    onChange={(e) => setInputData({ ...inputData, eventLoc: e.nativeEvent.text })}
                    value={inputData.eventLoc}
                    placeholder={"행사장소"}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                  ></TextInput>
                </View>
                <View style={styles.layer}>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>행사일</Text>
                    <Pressable onPress={() => openDateModal('from')}>
                      <View pointerEvents="none">
                        <TextInput
                          style={styles.depInfo}
                          placeholder={"시작일"}
                          placeholderTextColor='rgba(0,0,0,0.2)'
                          type="date"
                          required aria-required="true"
                          editable={false}
                          onBlur={() => { setheightMagnifi(1.2) }}
                        >
                          {inputData.eventStartDate.split(' ')[0]}
                        </TextInput>
                      </View>
                    </Pressable>
                  </View>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}></Text>
                    <Pressable onPress={() => openDateModal('to')}>
                      <View pointerEvents="none">
                        <TextInput
                          style={styles.depInfo}
                          placeholder={"종료일"}
                          placeholderTextColor='rgba(0,0,0,0.2)'
                          type="date"
                          required aria-required="true"
                          editable={false}
                          onBlur={() => { setheightMagnifi(1.2) }}
                        >
                          {inputData.eventEndDate.split(' ')[0]}
                        </TextInput>
                      </View>
                    </Pressable>

                  </View>
                </View>
                <View style={styles.infoWrap}>
                  <Text style={styles.label}>비고</Text>
                  <TextInput style={styles.depInfo}
                    placeholder={"비고"}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    onChange={(e) => setInputData({ ...inputData, eventComment: e.nativeEvent.text })}
                    value={inputData.eventComment}
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                  ></TextInput>
                </View>
                <TouchableOpacity onPress={() => checkStatus()} style={styles.checkBoxWrap}>
                  <View style={privacyAgree ? styles.checkBox : styles.unCheckBox}>
                    <ReactImage source={require('../../common/img/check.png')} style={styles.checkIcon} />
                  </View>
                  <Text style={styles.checkText}>공개여부</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnWrap}>
                <TouchableOpacity style={styles.regBtn} onPress={() => regEvent()}>
                  <Text style={styles.regBtnText}>등록</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <DateTimePickerModal
            isVisible={dateState.viewModal}
            mode="date"
            onConfirm={(a) => confirmDateChange(a, dateState.fromToFlag)}
            onCancel={() =>
              setDateState({ ...dateState, viewModal: false })
            }
            date={dateState.fromToFlag === 'from' ? dateState.confirmFromDate : dateState.confirmToDate}
          />

        </View>
        
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
    </Fragment >
  );
}

Tempo.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default Tempo