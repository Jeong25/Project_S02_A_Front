import React, { useEffect, useRef, useState, Fragment } from 'react';
import { Dimensions, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styleSheet } from './stylesheet';
import { regOrgReq, checkEmailReq, checkOrgReq } from '../store/store'

const SignUp = (props) => {
  const { windowHeight } = props
  const styles = styleSheet()
  const ref_input = []
  ref_input[0] = useRef(null)
  ref_input[1] = useRef(null)
  ref_input[2] = useRef(null)
  ref_input[3] = useRef(null)
  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)
  const [inputData, setInputData] = useState({
    orgName: null,
    ceoName: null,
    pwd: null,
    pwdCheck: null,
    memberName: null,
    firstHpNo: null,
    middleHpNo: null,
    lastHpNo: null,
    email: null,
    address: '',
    detailAddress: '',
    firstTelNo: '',
    middleTelNo: '',
    lastTelNo: '',
    memberId: '',
    zipCode: '',
  })

  const SignUpReq = async () => {
    if (inputData.orgName && inputData.ceoName && inputData.pwd && inputData.memberName && inputData.firstHpNo && inputData.middleHpNo && inputData.lastHpNo && inputData.email !== null) {
      const org = await checkOrgReq(inputData.orgName, inputData.ceoName)
      const email = await checkEmailReq(inputData.email)
      if (org) {
        if (email) {
          if (inputData.pwd === inputData.pwdCheck) {
            try {
              delete inputData.pwdCheck
              await regOrgReq(inputData)
              props.navigation.navigate('Signin')
            } catch (e) {
              Alert.alert('알림', '오류가 발생하여 처리하지 못했습니다.')
            }
          } else {
            Alert.alert('알림', '비밀번호가 일치하지 않습니다.')
          }
        } else {
          Alert.alert('알림', '중복되는 이메일입니다.')
        }
      } else {
        Alert.alert('알림', '중복되는 단체명입니다.')
      }
    } else {
      Alert.alert('알림', '비어있는 항목을 작성해주세요.')
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
            <Text style={styles.topTitle}>단체등록</Text>
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
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                  ></TextInput>
                </View>

              </View>

              <View style={styles.infoWrap}>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput style={styles.userInfo}
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
              <View style={styles.infoWrap}>
                <Text style={styles.label}>비밀번호 확인</Text>
                <TextInput style={styles.userInfo}
                  placeholder={"비밀번호 확인"}
                  placeholderTextColor='rgba(0,0,0,0.2)'
                  onChange={(e) => setInputData({ ...inputData, pwdCheck: e.nativeEvent.text })}
                ></TextInput>
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
                  ></TextInput>
                </View>
            </View>
            <View style={styles.btnWrap}>

              <TouchableOpacity style={styles.signInBtn} onPress={() => SignUpReq()}>
                <Text style={styles.signInBtnText}>단체등록</Text>
              </TouchableOpacity>

            </View>
          </KeyboardAwareScrollView >
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
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
