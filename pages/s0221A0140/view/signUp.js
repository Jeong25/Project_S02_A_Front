import React, { useEffect, useRef, useState, Fragment } from 'react';
import { Dimensions, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styleSheet } from './stylesheet';
import { regOrgReq, checkEmailReq, checkOrgReq } from '../store/store'
import CustomAlert from '../../common/Alert/Toast/Alert';

const SignUp = (props) => {
  const { windowHeight } = props
  const styles = styleSheet()
  const ref_input = []
  ref_input[0] = useRef(null)
  ref_input[1] = useRef(null)
  ref_input[2] = useRef(null)
  ref_input[3] = useRef(null)
  const [regCnt, setRegCnt] = useState(true)
  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)
  const [inputData, setInputData] = useState({
    orgName: '',
    ceoName: '',
    pwd: '',
    pwdCheck: '',
    memberName: '',
    firstHpNo: '',
    middleHpNo: '',
    lastHpNo: '',
    email: '',
    address: '',
    detailAddress: '',
    firstTelNo: '',
    middleTelNo: '',
    lastTelNo: '',
    memberId: 0,
    zipCode: '',
    eventNm: ''
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

  const SignUpReq = async () => {
    if (regCnt) {
      let checkParams = false
      if (inputData.orgName === '') {
        cusAlert('단체명을 작성해주세요.', '', false)
        return
      } else if (inputData.ceoName === '') {
        cusAlert('대표자 이름을 작성해주세요.', '', false)
        return
      } else if (inputData.memberName === '') {
        cusAlert('담당자 이름을 작성해주세요.', '', false)
        return
      } else if (inputData.firstHpNo === '' || inputData.middleHpNo === '' || inputData.lastHpNo === '') {
        cusAlert('담당자 연락처를 작성해주세요.', '', false)
        return
      } else if (inputData.pwd === '') {
        cusAlert('비밀번호를 작성해주세요.', '', false)
        return
      } else if (inputData.email === '') {
        cusAlert('이메일을 작성해주세요.', '', false)
        return
      } else if (inputData.eventNm === '') {
        cusAlert('부서명을 작성해주세요.', '', false)
        return
      } else {
        checkParams = true
      }
      setRegCnt(false)
      if (checkParams) {
        const org = await checkOrgReq(inputData.orgName, inputData.ceoName)
        const email = await checkEmailReq(inputData.email, inputData.orgName)
        if (org) {
          if (email) {
            if (inputData.pwd === inputData.pwdCheck) {
              try {
                delete inputData.pwdCheck
                const res = await regOrgReq(inputData)
                if (res.data.status === 200) {
                  cusAlert(`삐용에 오신 것을 환영합니다.\n\n단체명: ${res.data.data.orgName}\n부서명: ${res.data.data.eventNm}\n코드번호: ${res.data.data.eventCode}`, 'checke', true)
                } else {
                  cusAlert('오류가 발생했습니다.', '', false)
                }
              } catch (e) {
                cusAlert('오류가 발생했습니다.', '', false)
              }
            } else {
              cusAlert('비밀번호가 일치하지 않습니다.', '', false)
            }
          } else {
            cusAlert('사용할 수 없는 이메일입니다.', '', false)
          }
        } else {
          cusAlert('단체명&대표자명이 중복됩니다.', '', false)
        }
      } else { }
      setRegCnt(true)
    } else {
      cusAlert('알림', '등록처리중입니다.', '', false)
    }
  }

  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#f15a25' }}
      >
        <View style={styles.wrap}>
          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.topTitle}>신규가입</Text>
          </View>
          <KeyboardAwareScrollView
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
                    <Text style={styles.label}>담당자 이름</Text>
                    <TextInput style={styles.userInfo}
                      placeholder={"담당자"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onChange={(e) => setInputData({ ...inputData, memberName: e.nativeEvent.text })}
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>

                  </View>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>대표자</Text>
                    <TextInput style={styles.userInfo}
                      placeholder={"대표자"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onChange={(e) => setInputData({ ...inputData, ceoName: e.nativeEvent.text })}
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>
                </View>

              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>단체명</Text>
                <TextInput style={styles.userInfo}
                  placeholder={"단체명"}
                  placeholderTextColor='rgba(0,0,0,0.2)'
                  onChange={(e) => setInputData({ ...inputData, orgName: e.nativeEvent.text })}
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                ></TextInput>
              </View>
              <View style={styles.layer}>
                <View style={styles.hpInputWrap}>
                  <Text style={styles.hpLabel}>담당자 연락처</Text>
                  <TextInput style={styles.userInfo}
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                    placeholder={"010"}
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    onChange={(e) => {
                      setInputData({ ...inputData, firstHpNo: e.nativeEvent.text })
                      if (e.nativeEvent.text.length === 3) {
                        ref_input[2].current.focus()
                      }
                    }}
                    value={inputData.firstHpNo}
                    keyboardType="number-pad"
                    maxLength={3}
                    returnKeyType="done"
                    ref={ref_input[1]}
                  ></TextInput>
                </View>
                <View style={styles.hpInputWrap}>
                  <Text style={styles.label}></Text>
                  <TextInput style={styles.userInfo}
                    placeholder={"0000"}
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    onChange={(e) => {
                      setInputData({ ...inputData, middleHpNo: e.nativeEvent.text })
                      if (e.nativeEvent.text.length === 4) {
                        ref_input[3].current.focus()
                      }
                    }}
                    keyboardType="number-pad"
                    maxLength={4}
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                    returnKeyType="done"
                    ref={ref_input[2]}
                  ></TextInput>
                </View>
                <View style={styles.hpInputWrap}>
                  <Text style={styles.label}></Text>
                  <TextInput style={styles.userInfo}
                    placeholder={"0000"}
                    placeholderTextColor="rgba(0,0,0,0.2)"
                    onChange={(e) => {
                      setInputData({ ...inputData, lastHpNo: e.nativeEvent.text })
                    }}
                    keyboardType="number-pad"
                    maxLength={4}
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                    returnKeyType="done"
                    ref={ref_input[3]}
                  ></TextInput>
                </View>

              </View>
              <View style={styles.layer}>

                <View style={styles.inputWrap}>
                  <Text style={styles.label}>비밀번호</Text>
                  <TextInput style={styles.userInfo}
                    secureTextEntry={true}
                    placeholder={"비밀번호"}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    onChange={(e) => setInputData({ ...inputData, pwd: e.nativeEvent.text })}
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                  ></TextInput>
                </View>
                <View style={styles.inputWrap}>
                  <Text style={styles.label}>비밀번호 확인</Text>
                  <TextInput style={styles.userInfo}
                    secureTextEntry={true}
                    placeholder={"비밀번호 확인"}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    onChange={(e) => setInputData({ ...inputData, pwdCheck: e.nativeEvent.text })}
                  ></TextInput>
                </View>
              </View>

              <View style={styles.infoWrap}>
                <Text style={styles.label}>담당자 이메일</Text>
                <TextInput style={styles.userInfo}
                  placeholder={"이메일"}
                  placeholderTextColor='rgba(0,0,0,0.2)'
                  onChange={(e) => setInputData({ ...inputData, email: e.nativeEvent.text })}
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                ></TextInput>
              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>부서명</Text>
                <TextInput style={styles.userInfo}
                  placeholder={"부서명"}
                  placeholderTextColor='rgba(0,0,0,0.2)'
                  onChange={(e) => setInputData({ ...inputData, eventNm: e.nativeEvent.text })}
                ></TextInput>
              </View>
            </View>
            <View style={styles.btnWrap}>

              <TouchableOpacity style={styles.signInBtn} onPress={() => SignUpReq()}>
                <Text style={styles.signInBtnText}>신규가입</Text>
              </TouchableOpacity>

            </View>
          </KeyboardAwareScrollView >
        </View>
        
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <CustomAlert
          openModal={alertOpen}
          confirm={alertConfirm}
          message={alertMessage}
          image={alertImage}
          CusFunc={() => props.navigation.navigate('Signin')}
          useFunc={alertUseFunc}
          onClose={() => setAlertOpen(false)}
        />
    </Fragment>


  );
}

SignUp.propTypes = {

}

SignUp.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default SignUp
