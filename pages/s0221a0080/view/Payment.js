import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, Image, Alert } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { costReqDetailReq, processingCostReq } from '../store/store';
import Footer from '../../common/footer/Footer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import numberToCost from '../../common/util/numberToCost';
import ImageModal from 'react-native-image-modal';
import FastImage from 'react-native-fast-image';
import CustomAlert from '../../common/Alert/Toast/Alert';

const Payment = (props) => {
  const height = Dimensions.get('window').height
  const [headerData, setHeaderData] = useState({})
  const [detailData, setDetailData] = useState({})
  const [inputData, setInputData] = useState({})
  const styles = styleSheet()
  const preFix = 'https://s3.ap-northeast-2.amazonaws.com/s02-bucket/storage/img/s02/'
  const size = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
  }

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
    return true
  }

  const getData = async () => {
    const { eventUseId } = props.route.params
    const res = await costReqDetailReq(eventUseId)
    if (res.status === 200) {
      setHeaderData(res.data.data.header)
      setDetailData(res.data.data.detail)
    }
  }

  const requestPay = async (flag) => {
    console.log('Payment_Log1: ' + JSON.stringify(headerData))
    console.log('Payment_Log2: ' + JSON.stringify(detailData))
    console.log('Payment_Log3: ' + JSON.stringify(`${preFix}${headerData?.useReceiptId}`))

    const { eventUseId } = props.route.params
    const memberId = await AsyncStorage.getItem('memberId')

    const body = {
      ...inputData,
      eventUseId,
      memberId,
      payCurrentStep: 1,
      payResultFlag: flag
    }

    const response = await processingCostReq(body)

    if (response?.data?.status === 200) {
      cusAlert('처리되었습니다.', 'check', true)
    } else if (response?.data?.status === 500) {
      cusAlert('잠시 후 다시 시도하시거나 담당자에게 문의해 주세요.', '', false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
              <Image source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
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
              <View style={styles.fileBox}>
                <FastImage
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={{ uri: `${preFix}${headerData?.useReceiptId}` }}
                  resizeMethod="resize">
                  <ImageModal
                    resizeMode='contain'
                    style={{
                      width: size.windowWidth,
                      height: size.windowHeight
                    }}
                    source={{ uri: `${preFix}${headerData?.useReceiptId}` }}
                  />
                </FastImage>
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
                {/* <View style={styles.renderTitleWrap}>
                  <Text style={styles.renderTitle}>1차 결제</Text>
                </View> */}
                <View style={styles.contentsLayer}>
                  <View style={styles.RcontentsInner}>
                    <Text style={styles.label}>이름</Text>
                    <Text style={styles.shortInput}>{v.paiedName}</Text>
                  </View>
                  <View style={styles.RcontentsInner}>
                    <Text style={styles.label}>상태</Text>
                    <Text style={styles.shortInput}>{v.payResultNm}</Text>
                  </View>
                  <View style={styles.RcontentsInner}>
                    <Text style={styles.label}>결제일자</Text>
                    <Text style={styles.centerAlignText}>{v.payDate}</Text>
                  </View>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>결제의견</Text>
                  <Text style={styles.RhistoryInput}>{v.payComment}</Text>
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
        <CustomAlert
          openModal={alertOpen}
          confirm={alertConfirm}
          message={alertMessage}
          image={alertImage}
          CusFunc={() => props.navigation.goBack()}
          useFunc={alertUseFunc}
          onClose={() => setAlertOpen(false)}
        />
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