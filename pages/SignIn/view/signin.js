import React, { useEffect, useState } from 'react';
import { Dimensions, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styleSheet } from './stylesheet';

const SignIn = (props) => {
  const { windowHeight } = props
  const [heightMagnifi, setheightMagnifi] = useState(1.2)
  const [isFocus, setIsFoucs] = useState(false)

  const styles = styleSheet()

  let keyboardSub = null;



  const SignIn = (e) => {
    // console.log(e.nativeEvent.text)
    // const a = e.nativeEvent.text.toUpperCase()
    setEventCode(e.nativeEvent.text)
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
                  <TextInput style={styles.userInfo}></TextInput>
                </View>
                <View style={styles.inputWrap}>
                  <Text style={styles.label}>대표자</Text>
                  <TextInput style={styles.userInfo}></TextInput>
                </View>
              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>담당자 이름</Text>
                <TextInput style={styles.userInfo}></TextInput>
              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>핸드폰 번호</Text>
                <TextInput style={styles.userInfo}></TextInput>
              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput style={styles.userInfo}></TextInput>
              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>비밀번호 확인</Text>
                <TextInput style={styles.userInfo}></TextInput>
              </View>
              <View style={styles.infoWrap}>
                <Text style={styles.label}>이메일</Text>
                <TextInput style={styles.userInfo}></TextInput>
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

SignIn.propTypes = {

}

SignIn.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default SignIn
