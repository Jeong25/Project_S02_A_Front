import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Image as ReactImage } from 'react-native';
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
    <View style={styles.wrap}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        enableOnAndroid={true}
        scrollEnabled={true}
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps='always'
        nestedScrollEnabled={true}
        contentContainerStyle={{ height: height + 80 }}

      >

        <View style={styles.topMenu}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.topTitle}>승인처리</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.contentsWrap}>

              <View style={styles.contents}>
                <View style={styles.contentsInner}>
                  <Text style={styles.label}>작성자</Text>
                  <TextInput style={styles.centerAlignText} value={headerData?.userName} />
                </View>
                <View style={styles.contentsInner}>
                  <Text style={styles.label}>진행상태</Text>
                  <TextInput style={styles.centerAlignText} value={headerData?.useProStatusNm} />
                </View>
              </View>
              <View style={styles.contents}>
                <Text style={styles.label}>사용제목</Text>
                <TextInput style={styles.inputTextLong} value={headerData?.useSubject} />
              </View>
              <View style={styles.contents}>
                <Text style={styles.label}>행사명</Text>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputTextLong}
                    editable={false}
                    value={headerData.eventNm}></TextInput>
                </View>
              </View>
              <View style={styles.contents}>
                <View style={styles.contentsInner}>
                  <Text style={styles.label}>사용일자</Text>
                  <View style={styles.inputWrap}>
                    <TextInput style={styles.dateText} editable={false} value={headerData.usedDate}></TextInput>
                  </View>
                </View>
                <View style={styles.contentsInner}>
                  <View style={styles.inputWrap}>
                    <Text style={styles.label}>사용금액</Text>
                    <TextInput style={styles.rightAlignText} value={`${numberToCost(headerData.useAmount)}`} />
                    <Text style={styles.won}>원</Text>
                  </View>
                </View>

            </View>

              <View style={styles.contents}>
                <Text style={styles.label}>첨부파일</Text>
                <View style={styles.inputWrap}>
                  <TextInput style={styles.fileInput} value={headerData.useReceiptName}></TextInput>
                </View>

            </View>
            <View style={styles.contents}>
              <Text style={styles.label}>사용내역</Text>
              <TextInput
                style={styles.historyInput}
                multiline={true}
                value={headerData.useComment}
              />
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>


        {detailData.length > 0 ?
          detailData.map((v, k) => (

            <View key={k}>
              <View style={styles.renderInner}>
                <View style={styles.contents}>
                  <Text style={styles.label}>결제자명</Text>
                  <TextInput style={styles.centerAlignText} value={v.paiedName}></TextInput>
                  <Text style={styles.label}>결제여부</Text>
                  <TextInput style={styles.centerAlignText} value={v.payResultNm}></TextInput>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>결제일자</Text>
                  <TextInput style={styles.textLongAlignCenter} value={v.payDate}></TextInput>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>결제의견</Text>
                  <TextInput style={styles.RhistoryInput} value={v.payComment}></TextInput>
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
            <Text style={styles.confBtn}>승인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => requestPay("N")}>
            <Text style={styles.rejBtn}>반려</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAwareScrollView>

      <Footer
        navigation={props.navigation}
      />
    </View>
  )
}

export default Payment