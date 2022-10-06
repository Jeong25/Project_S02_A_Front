import { Text, View, TextInput, Image, Keyboard, Dimensions } from 'react-native';
import { styleSheet } from './stylesheet';
import React, { useState, useEffect } from 'react';
import { Image as ReactImage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { eventCostReq, patchEventCostReq, deleteEventCostReq } from '../store/store';
// import { eventListReq } from '../../s0221a2000/store/store';
// import client from '../../common/api/client';
// import TempoModal from '../../common/modal/s0221a2000/modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AlertAsync from 'react-native-alert-async';
import Footer from '../../common/footer/Footer';
import numberToCost from '../../common/util/numberToCost';

const CostModify = (props) => {
  const height = Dimensions.get('window').height
  const styles = styleSheet()
  const [memberId, setMemberId] = useState('')
  const [dateState, setDateState] = useState({
    viewModal: false,
    confirmVal: '',
    confirmDate: new Date()
  })
  // const [eventOption, setEventOption] = useState([])
  const [inputData, setInputData] = useState({
    "eventId": "",
    "eventNm": "",
    "useAmount": "",
    "useComment": "",
    "useProStatus": "A",
    "useReceiptId": "",
    "useSubject": "",
    "usedDate": ""
  })
  const [headerData, setHeaderData] = useState({})
  const [detailData, setDetailData] = useState([])
  // const [openModal, setOpenmodal] = useState(false)

  useEffect(() => {
    getData()
    // callModalData()
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
      console.log('CostModify_Log1: ' + JSON.stringify(headerData))
      console.log('CostModify_Log2: ' + JSON.stringify(detailData))
    }
    // if (!eventUseId) {
    //   alert('error')
    //   props.navigation.goBack()
    // }
    // const res = await client.get(`rest/v1/s0221a0060/event-cost?eventUseId=${eventUseId}`).catch((e) => {
    //   console.log(JSON.stringify(e, null, 4))
    // })
    // console.log(JSON.stringify(res, null, 4))
  }

  const openDateModal = () => {
    Keyboard.dismiss()
    setDateState({ ...dateState, viewModal: true })
  }

  // const openEventModal = () => {
  //   Keyboard.dismiss()
  //   setOpenmodal(true)
  // }

  const confirmDateChange = (val) => {
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    setDateState({ ...dateState, confirmDate: val, confirmVal: `${year}-${month}-${date}`, viewModal: false })
    setInputData({ ...inputData, usedDate: `${year}-${month}-${date}` })
  }

  const modifyEvent = async () => {
    const body = { ...inputData, usedDate: dateState.confirmVal, }
    // const response = await client.post(`rest/v1/s0221a0060/patch-event-cost`, body).catch((e) => {
    //   console.log('error')
    //   console.log(JSON.stringify(e, null, 4))
    // })
    // console.log(JSON.stringify(response, null, 4))
    const response = await patchEventCostReq(body)

    if (response.status === 200) {
      goback()
    }
  }

  const deleteEvent = async () => {
    await AlertAsync(
      "등록 내역을 삭제합니다.",
      "정말 삭제하시겠습니까?",
      [
        {
          text: '예',
          onPress: async () => {
            const { eventUseId } = inputData
            // const response = await client.post(`/rest/v1/s0221a0060/delete-event-cost`, [eventUseId]).catch((e) => {
            //   console.log(e)
            // })
            // console.log(response)
            const response = await deleteEventCostReq(eventUseId)
            if (response.status === 200) {
              await AlertAsync('삭제되었습니다.')
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

  // const callModalData = async () => {
  //   // const res = await client.get(`/rest/v1/s0221a2000/event-list?&orgId=39`).catch(e => {
  //   //   console.log(JSON.stringify(e, null, 4))
  //   // })
  //   const res = await eventListReq(39)
  //   if (res.status === 200) {
  //     const option = res.data?.data?.map(i => {
  //       return {
  //         text: i.eventNm, value: i.eventId
  //       }
  //     })
  //     setEventOption(option)
  //   }
  // }

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

  // const onClick = (e, text) => {
  //   setInputData({ ...inputData, eventId: e, eventNm: text })
  //   setOpenmodal(false)
  // }

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
            <TouchableOpacity onPress={goback} >
              <Image source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.topTitle}>비용요청결과</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.contentsWrap}>
            <View style={styles.contents}>
              <View style={styles.contentsInner}>
                <Text style={styles.modifyLabel}>작성자</Text>
                <TextInput style={styles.RcenterAlignText} value={headerData?.userName} />
              </View>
              <View style={styles.contentsInner}>
                <Text style={styles.modifyLabel}>진행상태</Text>
                <TextInput style={styles.RcenterAlignText} value={headerData?.useProStatusNm} />
              </View>
            </View>
            <View style={styles.contents}>
              <Text style={styles.modifyLabel}>사용제목</Text>
              <TextInput style={styles.modifyTextLong}
                onChange={(e) => setInputData({ ...inputData, useSubject: e.nativeEvent.text })} value={headerData?.useSubject} />
            </View>
            <View style={styles.contents}>
              <Text style={styles.modifyLabel}>행사명</Text>
              <TextInput
                style={styles.modifyTextLong}
                editable={false}
                value={headerData.eventNm}></TextInput>
              <View style={styles.modifySearchBtn} >
                <TouchableOpacity onPressIn={() => props.navigation.navigate('EventList')}>
                  <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.contents}>
              <View style={styles.contentsInner}>
                <Text style={styles.modifyLabel}>사용일자</Text>
                <View style={styles.modifyInputWrap}>
                  <TextInput style={styles.modifyDateText} editable={false} value={headerData.usedDate}>
                  </TextInput>
                  <View style={styles.modifyDateSearchBtn} >
                    <TouchableOpacity onPressIn={() => openDateModal()} >
                      <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.contentsInner}>
                <View style={styles.modifyInputWrap}>
                  <Text style={styles.modifyLabel}>사용금액</Text>
                  <TextInput style={styles.rightAlignText} onChange={(e) => setInputData({ ...inputData, useAmount: e.nativeEvent.text })} value={`${numberToCost(headerData.useAmount)}`} />
                  <Text style={styles.modifyWon}>원</Text>
                </View>
              </View>
            </View>

            <View style={styles.contents}>
              <Text style={styles.modifyLabel}>첨부파일</Text>
              <TextInput style={styles.modifyFileInput} value={headerData.useReceiptName}></TextInput>
              <View style={styles.modifyAddBtn}>
                <TouchableOpacity onPressIn={() => ShowPicker()}>
                  <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.contents}>
              <Text style={styles.modifyLabel}>사용내역</Text>
              <TextInput
                style={styles.historyInput}
                multiline={true}
                onChange={(e) => setInputData({ ...inputData, useComment: e.nativeEvent.text })}
                value={headerData.useComment}
              />
            </View>
            <View style={styles.sepLine}></View>

            {detailData.length > 0 ?
              detailData.map((v, i) => (
                <View key={i}>
                  <View style={styles.contents}>
                    <Text style={styles.modifyLabel}>결제자명</Text>
                    <TextInput style={styles.RcenterAlignText} value={v.paiedName}></TextInput>
                    <Text style={styles.modifyLabel}>결제여부</Text>
                    <TextInput style={styles.RcenterAlignText} value={v.payResultNm}></TextInput>
                  </View>
                  <View style={styles.contents}>
                    <Text style={styles.modifyLabel}>결제일자</Text>
                    <TextInput style={styles.modifyTextLongAlignCenter} value={v.payDate}></TextInput>
                  </View>
                  <View style={styles.contents}>
                    <Text style={styles.modifyLabel}>결제의견</Text>
                    <TextInput style={styles.RhistoryInput} value={v.payComment}></TextInput>
                  </View>
                  <View style={styles.sepLine}></View>
                </View>
              )) :
              <View>
                <View style={styles.contents}>
                  <Text style={styles.modifyLabel}>결제자명</Text>
                  <TextInput style={styles.RcenterAlignText}></TextInput>
                  <Text style={styles.modifyLabel}>결제여부</Text>
                  <TextInput style={styles.RcenterAlignText}></TextInput>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.modifyLabel}>결제일자</Text>
                  <TextInput style={styles.modifyTextLongAlignCenter}></TextInput>
                </View>
                <View style={styles.contents}>
                  <Text style={styles.modifyLabel}>결제의견</Text>
                  <TextInput style={styles.RhistoryInput}></TextInput>
                </View>
                <View style={styles.sepLine}></View>
              </View>}

          </View>
          <View style={styles.modifyBtnWrap}>
            <TouchableOpacity onPress={modifyEvent}>
              <Text style={styles.requestBtn}>저장</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteEvent}>
              <Text style={styles.delBtn}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePickerModal
          isVisible={dateState.viewModal}
          mode="date"
          onConfirm={(a) => confirmDateChange(a)}
          onCancel={() =>
            setDateState({ ...dateState, viewModal: false })
          }
          date={dateState.confirmDate}
        />
        {/* <TempoModal
          openModal={openModal}
          onClick={onClick}
          onClose={() => setOpenmodal(false)}
          option={eventOption}
        /> */}
      </KeyboardAwareScrollView>
      <Footer
        navigation={props.navigation}
      />
    </View>
  )
}

export default CostModify