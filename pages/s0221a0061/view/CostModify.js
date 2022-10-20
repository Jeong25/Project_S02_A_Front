import { Text, View, TextInput, Image, Keyboard, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { styleSheet } from './stylesheet';
import React, { useState, useEffect, Fragment } from 'react';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { eventCostReq, patchEventCostReq, deleteEventCostReq } from '../store/store';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AlertAsync from 'react-native-alert-async';
import Footer from '../../common/footer/Footer';
import numberToCost from '../../common/util/numberToCost';

const CostModify = (props) => {
  const height = Dimensions.get('window').height
  const styles = styleSheet()
  const [memberId, setMemberId] = useState('')
  const [eventName, setEventName] = useState('')
  const [dateState, setDateState] = useState({
    viewModal: false,
    confirmVal: '',
    confirmDate: new Date()
  })
  const [inputData, setInputData] = useState({
    "eventId": "",
    "eventUseId": "",
    "eventUserId": "",
    "useAmount": "",
    "useComment": "",
    "base64String": "",
    "useReceiptName": "",
    "useSubject": "",
    "usedDate": ""
  })
  const [headerData, setHeaderData] = useState({})
  const [detailData, setDetailData] = useState([])
  const [eventInfo, setEventInfo] = useState({})

  useEffect(() => {
    getData()
  }, [props])

  const getData = async () => {
    const localMemberId = await AsyncStorage.getItem('memberId')
    if (localMemberId) {
      setMemberId(localMemberId)
    }
    console.log(JSON.stringify(props.route.params.data, null, 4))
    const { data } = props.route.params
    setInputData({ ...data })
    setDateState({ ...dateState, confirmDate: new Date(data.usedDate), confirmVal: data.usedDate })
    if (!data.eventUseId) {
      alert('Error')
      props.navigation.goBack()
    } else {
      const res = await eventCostReq(data.eventUseId)
      setHeaderData(res.data.data.header)
      setDetailData(res.data.data.detail)
      setEventName(res.data.data.header.eventNm)
      console.log('CostModify_Log1: ' + JSON.stringify(inputData))
      console.log('CostModify_Log2: ' + JSON.stringify(detailData))
    }
  }

  const openDateModal = () => {
    Keyboard.dismiss()
    setDateState({ ...dateState, viewModal: true })
  }

  const confirmDateChange = (val) => {
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    setDateState({ ...dateState, confirmDate: val, confirmVal: `${year}-${month}-${date}`, viewModal: false })
    setInputData({ ...inputData, usedDate: `${year}-${month}-${date}` })
  }

  const modifyEvent = async () => {
    const body = { ...inputData, usedDate: dateState.confirmVal, }
    const response = await patchEventCostReq(body)

    if (response.status === 200) {
      goback()
    }
  }

  const deleteEvent = async () => {
    await AlertAsync(
      "비용 요청건을 취소하시겠습니까?",
      "",
      [
        {
          text: '예',
          onPress: async () => {
            const { eventUseId } = inputData
            const response = await deleteEventCostReq(eventUseId)
            if (response.status === 200) {
              await AlertAsync('요청 취소 되었습니다.')
              await goback()
            }
          }
        },
        {
          text: '아니오',
        },
      ],
      { cancelable: false }
    )
  }

  const goback = async () => {
    try {
      props.route.params.refresh()
    } catch (error) {
      console.log(error)
    }
    props.navigation.goBack()
  }

  const ShowPicker = () => {
    //launchImageLibrary : 사용자 앨범 접근
    console.log('res');

    launchImageLibrary({}, (res) => {
      alert(res.assets[0].uri)
      const formdata = new FormData()
      formdata.append('file', res.assets[0].uri);
      console.log(res);
    }).catch(e => { console.log(e) })
  }

  const getEventInfo = (params) => {
    setEventName(params.eventNm)
    setInputData({ ...inputData, eventId: params.eventId })
  }

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>
          <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            enableOnAndroid={true}
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            keyboardShouldPersistTaps='always'
            nestedScrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
          >
            <View style={styles.topMenu}>
              <View style={styles.backBtn}>
                <TouchableOpacity onPress={goback} >
                  <Image source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.topTitle}>비용요청결과</Text>
            </View>
            <View style={styles.inner}>
              <View style={styles.contentsWrap}>
                <View style={styles.contentsLayer}>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>작성자</Text>
                    <Text style={styles.centerAlignText}>
                      {headerData?.userName}
                    </Text>
                  </View>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>진행상태</Text>
                    <Text style={styles.centerAlignText}>{headerData?.useProStatusNm}</Text>
                  </View>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>사용제목</Text>
                  <TextInput style={styles.longInput}
                    onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} value={inputData?.useSubject} />
                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>행사명</Text>
                  <TextInput
                    style={styles.longInput}
                    editable={false}
                    value={eventName}></TextInput>
                  <View style={styles.searchBtn} >
                    <TouchableOpacity onPressIn={() => props.navigation.navigate('EventList', { getEventInfo })}>
                      <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.contentsLayer}>
                  <View style={styles.contentsInner}>
                    <Text style={styles.label}>사용일자</Text>
                    <View style={styles.inputWrap}>
                      <TextInput style={styles.modifyDateText} editable={false} value={inputData.usedDate}></TextInput>
                      <View style={styles.dateSearchBtn} >
                        <TouchableOpacity onPressIn={() => openDateModal()} >
                          <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.contentsInner}>
                    <View style={styles.inputWrap}>
                      <Text style={styles.label}>사용금액</Text>
                      <TextInput style={styles.rightAlignText} onChange={(e) => setInputData({ ...inputData, useAmount: e.nativeEvent.text })} value={`${numberToCost(inputData.useAmount)}`} />
                      <Text style={styles.won}>원</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.contents}>
                  <Text style={styles.label}>첨부파일</Text>
                  <TextInput style={styles.fileInput} value={inputData.useReceiptName}></TextInput>
                  <View style={styles.addBtn}>
                    <TouchableOpacity onPressIn={() => ShowPicker()}>
                      <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
                    </TouchableOpacity>
                  </View>

                </View>
                <View style={styles.contents}>
                  <Text style={styles.label}>사용내역</Text>
                  <TextInput
                    style={styles.historyInput}
                    multiline={true}
                    onChange={(e) => setInputData({ ...inputData, useComment: e.nativeEvent.text })}
                    value={inputData.useComment}
                  />
                </View>
              </View>
            </View>

            <View style={styles.divider}></View>

            {detailData.length > 0 ?
              detailData.map((v, i) => (
                <View key={i}>
                  <View style={styles.renderInner}>
                    <View style={styles.contentsLayer}>
                      <Text style={styles.label}>결제자명</Text>
                      <Text style={styles.centerAlignText}>{v.paiedName}</Text>
                      <Text style={styles.label}>결제여부</Text>
                      <Text style={styles.centerAlignText}>{v.payResultNm}</Text>
                    </View>
                    <View style={styles.contents}>
                      <Text style={styles.label}>결제일자</Text>
                      <Text style={styles.longInputAlignCenter}>{v.payDate}</Text>
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
              </View>}

            {headerData?.useProStatus === 'A' || headerData?.useProStatus === 'E' ?
              <View style={styles.modifyBtnWrap}>
                <TouchableOpacity onPress={modifyEvent}>
                  <View style={styles.requestBtn}>
                    <Text style={styles.btnText}>저장</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteEvent}>
                  <View style={styles.delBtn}>
                    <Text style={styles.btnText}>취소</Text>
                  </View>
                </TouchableOpacity>
              </View> :
              <View style={styles.modifyBtnWrap}></View>
            }

            <DateTimePickerModal
              isVisible={dateState.viewModal}
              mode="date"
              onConfirm={(a) => confirmDateChange(a)}
              onCancel={() =>
                setDateState({ ...dateState, viewModal: false })
              }
              date={dateState.confirmDate}
            />
          </KeyboardAwareScrollView>

        </View>
      </SafeAreaView>

      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}>
      </SafeAreaView>
    </Fragment>


  )
}

export default CostModify