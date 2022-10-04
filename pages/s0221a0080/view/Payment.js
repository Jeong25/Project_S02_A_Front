import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { costReqDetail, processingCostReq } from '../repository/repository';
// import client from '../../common/api/client';
import Footer from '../../common/footer/Footer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Payment = (props) => {
  const [detailData, setDetailData] = useState({})
  const [inputData, setInputData] = useState({})
  const styles = styleSheet()

  useEffect(() => {
    callDetail()
  }, [])

  const callDetail = async () => {
    const { eventUseId } = props.route.params
    // const response = await client.get(`/rest/v1/s0221a0080/cost-req-detail?eventUseId=${eventUseId}`).catch((e) => {
    //   console.log(e)
    // })
    const response = costReqDetail(eventUseId)
    if (response.status === 200) {
      console.log('?')
      console.log(JSON.stringify(response, null, 4))
      const memberName = await AsyncStorage.getItem('memberName')
      setDetailData({ ...response.data?.data || {}, memberName: memberName })
    }
  }

  const requestPay = async (flag) => {
    const { eventUseId } = props.route.params
    const memberId = await AsyncStorage.getItem('memberId')

    const body = {
      ...inputData,
      eventUseId,
      memberId,
      payCurrentStep: 1,
      payResultFlag: flag
    }

    console.log(body)
    // const response = await client.post(`/rest/v1/s0221a0080/processing-cost-req`, body).catch((e) => {
    //   console.log(e)
    // })
    // console.log(JSON.stringify(response?.data, null, 4))
    const response = await processingCostReq(body)

    if (response?.data?.status === 200) {
      props.navigation.goBack()
    }
  }

  const renderDetailPay = (item) => {
    return (
      <View>
        <View style={styles.sepLine}></View>
        <View style={styles.contents}>
          <Text style={styles.label}>결제자명</Text>
          <Text>{item?.paiedName}</Text>
        </View>
        <View style={styles.contents}>
          <Text style={styles.label}>결제결과</Text>
          <Text>{item?.payResultFlagNm}</Text>
        </View>
        <View style={styles.contents}>
          <Text style={styles.label}>결제의견</Text>
          <Text>{item?.payComment}</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.wrap} >
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
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.topTitle}>상세현황</Text>
          </View>
          <View style={styles.inner}>
            <View style={styles.contentsWrap}>

              <View style={styles.contents}>
                <View style={styles.contentsInner}>
                  <Text style={styles.label}>작성자</Text>
                  <TextInput style={styles.inputText} />
                </View>
                <View style={styles.contentsInner}>
                  <Text style={styles.label}>결제상태</Text>
                  <TextInput style={styles.inputText} />
                </View>
              </View>

              <View style={styles.contents}>
                <Text style={styles.label}>사용제목</Text>
                <TextInput style={styles.inputTextLong} />
              </View>

              <View style={styles.contents}>
                <Text style={styles.label}>행사명</Text>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputTextLong}></TextInput>
                  <View style={styles.searchBtn} >
                    <TouchableOpacity>
                      <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.contents}>
                <View style={styles.contentsInner}>
                  <Text style={styles.label}>사용일자</Text>
                  <View style={styles.inputWrap}>
                    <TextInput style={styles.inputText}>
                    </TextInput>

                    <View style={styles.searchBtn} >
                      <TouchableOpacity>
                        <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.contentsInner}>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>결제금액</Text>
                    <TextInput style={styles.inputText} />
                    <Text style={styles.won}>원</Text>
                  </View>
                </View>

              </View>

              <View style={styles.contents}>
                <Text style={styles.label}>첨부파일</Text>
                <View style={styles.inputWrap}>
                  <TextInput style={styles.inputTextLong}></TextInput>
                  <View style={styles.addBtn}>
                    <TouchableOpacity onPressIn={() => ShowPicker()}>
                      <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View style={styles.contents}>
                <Text style={styles.label}>사용내역</Text>
                <TextInput
                  style={styles.inputTextLong}
                  multiline={true}
                  onChange={(e) => setInputData({ ...inputData, useComment: e.nativeEvent.text })}
                  value={inputData.useComment}
                />
              </View>

              <View style={styles.sepLine}></View>

              <View style={styles.contents}>
                <Text style={styles.label}>결제자명</Text>
                <TextInput>결제자A</TextInput>
                <Text style={styles.label}>결제여부</Text>
                <TextInput>승인</TextInput>
              </View>

              <View style={styles.contents}>
                <Text style={styles.label}>결제일자</Text>
                <TextInput>2022-01-01</TextInput>

              </View>
              <View style={styles.contents}>
                <Text style={styles.label}>결제의견</Text>
                <TextInput>상기 내역을 승인함.</TextInput>
              </View>

              <View style={styles.sepLine}></View>
              <View style={styles.contentsTextarea}>
                <Text style={styles.label}>결제의견</Text>
                <TextInput style={styles.opinion} onChange={(e) => setInputData({ ...inputData, payComment: e.nativeEvent.text })} />
              </View>
              {detailData?.detail?.map((item) => renderDetailPay(item))}
            </View>
            <View style={styles.btnWrap}>
              <TouchableOpacity onPress={() => requestPay("Y")}>
                <Text style={styles.confBtn}>승인</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => requestPay("N")}>
                <Text style={styles.rejBtn}>반려</Text>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAwareScrollView>
      </View>
      <Footer
        navigation={props.navigation}
      />
    </View>
  )
}

export default Payment