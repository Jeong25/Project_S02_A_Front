import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, Alert, TextInput } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';


const Tempo = (props) => {

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>

          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('../assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>부서등록</Text>

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
                    <Text style={styles.label}>부서명</Text>
                    <TextInput style={styles.depInfo}
                      placeholder={"부서명"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>부서코드</Text>
                    <TextInput style={styles.depInfo}
                      placeholder={"부서코드"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
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
                    <TextInput style={styles.depInfo}
                      placeholder={"책임자"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>

                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>예산금액</Text>
                    <TextInput style={styles.depInfo}
                      placeholder={"예산금액"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>
                </View>

                <View style={styles.infoWrap}>
                  <Text style={styles.label}>행사장소</Text>
                  <TextInput style={styles.depInfo}
                    placeholder={"행사장소"}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                  ></TextInput>
                </View>

                <View style={styles.layer}>

                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>행사일</Text>
                    <TextInput style={styles.depInfo}
                      placeholder={"시작일"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                      onFocus={() => {
                        setheightMagnifi(1.5)
                        setIsFoucs(true)
                      }}
                      onBlur={() => { setheightMagnifi(1.2) }}
                    ></TextInput>
                  </View>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}></Text>
                    <TextInput style={styles.depInfo}
                      placeholder={"종료일"}
                      placeholderTextColor='rgba(0,0,0,0.2)'
                    ></TextInput>
                  </View>
                </View>

                <View style={styles.infoWrap}>
                  <Text style={styles.label}>비고</Text>
                  <TextInput style={styles.depInfo}
                    placeholder={"비고"}
                    placeholderTextColor='rgba(0,0,0,0.2)'
                    onFocus={() => {
                      setheightMagnifi(1.5)
                      setIsFoucs(true)
                    }}
                    onBlur={() => { setheightMagnifi(1.2) }}
                  ></TextInput>
                </View>
                <View style={styles.checkBoxWrap}>
                  <View style={styles.checkBox}>
                    <ReactImage source={require('../assets/check.png')} style={styles.checkIcon} />
                  </View>
                  <Text style={styles.checkText}>공개여부</Text>
                </View>
              </View>
              <View style={styles.btnWrap}>

                <TouchableOpacity style={styles.signInBtn} onPress={() => SignUpReq()}>
                  <Text style={styles.signInBtnText}>등록</Text>
                </TouchableOpacity>

              </View>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    </Fragment >

  );
}

export default Tempo

Tempo.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
