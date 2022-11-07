import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styleSheet } from './stylesheet';

const SignUp = (props) => {
  const { windowHeight } = props
  const styles = styleSheet()
  const ref_input = []
  ref_input[0] = useRef(null)
  ref_input[1] = useRef(null)
  ref_input[2] = useRef(null)
  ref_input[3] = useRef(null)
  // ref_input[4] = useRef(null)
  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)
  const [inputData, setInputData] = useState({
    orgName: null,
    ceoName: null,
    pwd: null,
    memberName: null,
    firstHpNo: null,
    middleHpNo: null,
    lastHpNo: null,
    email: null
  })

  const SignUpReq = () => {
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#f15a25' }}
    >
      <View style={styles.wrap}>
        <View style={styles.topMenu}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <ReactImage source={require('../assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
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
            <View style={styles.titleWrap}>
              <View style={styles.subTitleWrap}>
                <ReactImage source={require('../assets/wavingHand.png')} style={styles.icon} />
                <Text style={styles.welcome}>
                  환영합니다!
                </Text>
              </View>
              {/* <Text style={styles.mainTitle}>단체 정보를 등록해주세요.</Text> */}
            </View>

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
                      // if (e.nativeEvent.text.length === 4) {
                      //   ref_input[4].current.focus()
                      // }
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

            </View>

          </View>
          <View style={styles.btnWrap}>

            <TouchableOpacity style={styles.signInBtn}>
              <Text style={styles.signInBtnText}>단체등록</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAwareScrollView >
      </View>
    </SafeAreaView>

  );
}

SignUp.propTypes = {

}

SignUp.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default SignUp
