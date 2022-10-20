import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Dimensions,Image } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { costReqDetailReq, processingCostReq } from '../store/store';
import Footer from '../../common/footer/Footer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import numberToCost from '../../common/util/numberToCost';

const Payment = (props) => {
  const height = Dimensions.get('window').height
  const [headerData, setHeaderData] = useState({})
  const [detailData, setDetailData] = useState({})
  const [inputData, setInputData] = useState({})
  const styles = styleSheet()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { eventUseId } = props.route.params
    const res = await costReqDetailReq(eventUseId)
    if (res.status === 200) {
      setHeaderData(res.data.data.header)
      setDetailData(res.data.data.detail)
      console.log('CostModify_Log1: ' + JSON.stringify(headerData))
      console.log('CostModify_Log2: ' + JSON.stringify(detailData))
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
    const response = await processingCostReq(body)

    if (response?.data?.status === 200) {
      props.navigation.goBack()
    }
  }

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a25' }}>
      </SafeAreaView>
      <KeyboardAwareScrollView
        style={styles.wrap}
        resetScrollToCoords={{ x: 0, y: 0 }}
        enableOnAndroid={true}
        scrollEnabled={true}
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps='always'
        nestedScrollEnabled={true}
      // contentContainerStyle={{ height: height + 130 }}

      >

        <View style={styles.topMenu}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.topTitle}>승인처리</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.contentsWrap}>

            <View style={styles.contentsLayer}>
              <View style={styles.contentsInner}>
                <Text style={styles.label}>작성자</Text>
                <Text style={styles.centerAlignText}>{headerData?.userName}</Text>
              </View>
              <View style={styles.contentsInner}>
                <Text style={styles.label}>진행상태</Text>
                <Text style={styles.centerAlignText}>{headerData?.useProStatusNm}</Text>
              </View>
            </View>
            <View style={styles.contents}>
              <Text style={styles.label}>사용제목</Text>
              <Text style={styles.inputTextLong}>{headerData?.useSubject}</Text>
            </View>
            <View style={styles.contents}>
              <Text style={styles.label}>행사명</Text>
              <Text style={styles.inputTextLong}>{headerData.eventNm}</Text>
            </View>
            <View style={styles.contentsLayer}>
              <View style={styles.contentsInner}>
                <Text style={styles.label}>사용일자</Text>
                <Text style={styles.dateText}>{headerData.usedDate}</Text>
              </View>
              <View style={styles.contentsInner}>
                <Text style={styles.label}>사용금액</Text>
                <Text style={styles.rightAlignText}>{`${numberToCost(headerData.useAmount)}`}</Text>
                <Text style={styles.won}>원</Text>
              </View>

            </View>

            <View style={styles.contents}>
              <Text style={styles.label}>첨부파일</Text>
              {/* <Text style={styles.fileInput}>{headerData.useReceiptName}</Text> */}
              <View style={styles.fileBox}>
                <Image 
                source={require('./assets/sampleImage.jpeg')}
                style={{width: 45, height: 45}}
                />
              </View>
            </View>
            <View style={styles.contents}>
              <Text style={styles.label}>사용내역</Text>
              <Text
                style={styles.historyInput}
                multiline={true}
              >
                {headerData.useComment}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>


        {detailData.length > 0 ?
          detailData.map((v, k) => (

            <View key={k}>
              <View style={styles.renderInner}>
                <View style={styles.contentsLayer}>
                  <View style={styles.contentsInner}>

                    <Text style={styles.label}>결제자명</Text>
                    <Text style={styles.centerAlignText}>{v.paiedName}</Text>
                  </View>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>결제여부</Text>
                    <Text style={styles.centerAlignText}>{v.payResultNm}</Text>
                  </View>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>결제일자</Text>
                  <Text style={styles.dateInputTextLong}>{v.payDate}</Text>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>결제의견</Text>
                  <Text style={styles.historyInput}>{v.payComment}</Text>
                </View>
              </View>
              <View style={styles.divider}></View>
            </View>
          )) :
          <View>
          </View>
        }
        <View style={styles.inner}>
          <View style={styles.contentsTextarea}>
            <Text style={styles.label}>결제의견</Text>
            <TextInput style={styles.opinion} onChange={(e) => setInputData({ ...inputData, payComment: e.nativeEvent.text })} />
          </View>
        </View>

        <View style={styles.btnWrap}>
          <TouchableOpacity onPress={() => requestPay("Y")}>
            <View style={styles.confBtn}>
              <Text style={styles.btnText}>승인</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => requestPay("N")}>
            <View style={styles.rejBtn}>
              <Text style={styles.btnText}>반려</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

      <Footer
        style={{ flex: 1 }}
        navigation={props.navigation}
      />

      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    </Fragment >
  )
}

export default Payment