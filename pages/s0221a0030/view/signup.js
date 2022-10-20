import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';
import { Text, View,SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUpReq } from '../store/store';
import { styleSheet } from './stylesheet';
import { setUserTp } from '../../common/lib/getuserinfo';

const Signup = (props) => {
  const { windowHeight } = props
  const [name, setName] = useState('')
  const [eventCode, setEventCode] = useState('')
  const [inputhpNo, setInputHpNo] = useState({
    first: '',
    middle: '',
    last: '',
  })
  const [show, setShow] = useState(false)
  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)
  const [privacyAgree, setPrivacyAgree] = useState(false)

  const ref_input = []
  ref_input[0] = useRef(null)
  ref_input[1] = useRef(null)
  ref_input[2] = useRef(null)
  ref_input[3] = useRef(null)
  ref_input[4] = useRef(null)

  const styles = styleSheet()

  let keyboardSub = null;

  useEffect(() => {
    try {
      const getLocalData = async () => {
        const localName = await AsyncStorage.getItem('memberName')
        const hpNo = await AsyncStorage.getItem('hpNo')
        const localEventCode = await AsyncStorage.getItem('eventCode')
        console.log(localName, hpNo, localEventCode)
        if (localName && hpNo && localEventCode) {
          doLogin(localName, hpNo, localEventCode, true)
        } else {
          setShow(true)
        }
        return
      }
      getLocalData()
    } catch (error) {
      console.log(error)
      setShow(true)
    }
  }, [])

  useEffect(() => {
    keyboardSub = Keyboard.addListener('keyboardDidHide', blurTextInput)
    return () => {
      keyboardSub?.remove()
    }
  }, [isFocus])

  const blurTextInput = () => {
    if (isFocus) {
      Keyboard.dismiss()
      setIsFoucs(false)
      setheightMagnifi(1.2)
    }
  }

  const doLogin = async (paramName, paramHpNo, paramEventCode, privacy) => {
    if (!privacy) {
      alert('개인정보 수집에 동의해주세요')
      return
    }
    if (paramName === '') {
      alert('성명을 입력해주세요')
      return
    }
    if (paramHpNo === '' || paramHpNo.length < 11) {
      alert('핸드폰 번호를 확인해주세요')
      return
    }
    if (paramEventCode === '') {
      alert('부서코드를 확인해주세요.')
      return
    }
    if (!paramName || !paramHpNo) {
      return
    }
    keyboardSub?.remove()

    try {
      const result = await signUpReq(paramName, paramHpNo, paramEventCode)
      if (result?.status === 500) {
        alert(result.massage)
        return
      } else if (result?.status === 200) {
        const { data } = result
        if (data.massage === '등록되지 않은 부서코드입니다.') {
          alert(data.massage)
          return
        }

        await AsyncStorage.setItem('memberName', paramName || '')
        await AsyncStorage.setItem('hpNo', paramHpNo || '')
        await AsyncStorage.setItem('eventCode', paramEventCode || '')
        await setUserTp()

      } else {
        return
      }
    } catch (error) {
      console.log(error)
      return
    }
    await props.navigation.reset({ routes: [{ name: 'QrCode' }] })
  }

  const checkHeight = () => {
    if (windowHeight < 800) {
      return heightMagnifi
    } else {
      return 1
    }
  }

  const test = (e) => {
    // console.log(e.nativeEvent.text)
    // const a = e.nativeEvent.text.toUpperCase()
    setEventCode(e.nativeEvent.text)
  }

  return (
    <>
      {show && <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollToOverflowEnabled={false}
        enableAutomaticScroll
        enableOnAndroid
        keyboardShouldPersistTaps='always'
        contentContainerStyle={{ height: windowHeight * checkHeight() }}
      >
        <SafeAreaView
          style={styles.wrap}
        >
          <View style={styles.titleWrap}>
            <Text style={styles.subTitle}>
              <Text style={styles.subTitleBold}>쉽고 편리한</Text> 영수증처리
            </Text>
            <Text style={styles.title}>삐  용</Text>
          </View>
          <View style={styles.contentsWrap}>
            <View style={styles.contentsInner}>
              <TextInput
                style={styles.inputName}
                placeholder={"이름"}
                placeholderTextColor="#888" 
                onChange={(e) => setName(e.nativeEvent.text)}
                onFocus={() => {
                  setheightMagnifi(1.5)
                  setIsFoucs(true)
                }}
                onBlur={() => { setheightMagnifi(1.2) }} />
              <View style={styles.phoneInputWrap}>
                <TextInput
                  style={styles.phoneInput1}
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                  placeholder={"010"}
                  placeholderTextColor="#888" 
                  onChange={(e) => {
                    setInputHpNo({ ...inputhpNo, first: e.nativeEvent.text })
                    if (e.nativeEvent.text.length === 3) {
                      ref_input[2].current.focus()
                    }
                  }}
                  keyboardType="number-pad"
                  maxLength={3}
                  returnKeyType="done"
                  ref={ref_input[1]}
                />
                <View style={styles.dash}></View>
                <TextInput
                  style={styles.phoneInput2}
                  placeholder={"0000"}
                  placeholderTextColor="#888" 
                  onChange={(e) => {
                    setInputHpNo({ ...inputhpNo, middle: e.nativeEvent.text })
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
                />
                <View style={styles.dash}></View>
                <TextInput
                  style={styles.phoneInput3}
                  placeholder={"0000"}
                  placeholderTextColor="#888" 

                  onChange={(e) => {
                    setInputHpNo({ ...inputhpNo, last: e.nativeEvent.text })
                    if (e.nativeEvent.text.length === 4) {
                      ref_input[4].current.focus()
                    }
                  }}
                  keyboardType="number-pad"
                  onFocus={() => {
                    setheightMagnifi(1.5)
                    setIsFoucs(true)
                  }}
                  onBlur={() => { setheightMagnifi(1.2) }}
                  maxLength={4}
                  returnKeyType="done"
                  ref={ref_input[3]}
                />
              </View>
              <TextInput
                style={styles.inputCode}
                placeholder={'코드번호'}
                placeholderTextColor="#888" 
                ref={ref_input[4]}
                onChange={(e) => setEventCode(e.nativeEvent.text)}
                autoCapitalize={'characters'}
              >
                {eventCode}
              </TextInput>
              <TouchableOpacity onPress={() => setPrivacyAgree(!privacyAgree)}>
                <View style={styles.infoAggWrap}>
                  <View style={privacyAgree ? styles.checkBox : styles.unCheckBox}>
                    <ReactImage source={require('./assets/check.png')} style={styles.checkIcon} />
                  </View>
                  <Text style={styles.infoAgg}>개인정보 수집 및 이용 동의</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.textBox}>
                <View>
                  <Text style={styles.textBoxTitle}>[ 개인정보수집 및 사용 ]</Text>
                  <Text style={styles.text}>목적 : 삐용 앱 이용</Text>
                  <Text style={styles.text}>수집 : 이름, 전화번호</Text>
                  <Text style={styles.text}>보유기간 : 목적 달성 시 지체없이 폐기</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.loginBtnWrap} onPress={() => doLogin(name, `${inputhpNo.first}${inputhpNo.middle}${inputhpNo.last}`, eventCode, privacyAgree)}>
                <View style={styles.loginBtn}>
                  <Text style={styles.loginText}>로그인</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView >}
    </>
  );
}

Signup.propTypes = {

}

Signup.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default Signup
