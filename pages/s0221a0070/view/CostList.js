import React, { Component, useEffect, useMemo, useState } from 'react';
import { Text, View, TextInput, ScrollView, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import { retrieveCostReq } from '../store/store';
import { eventListReq } from '../../s0221a2000/store/store';
// import client from '../../common/api/client';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TempoModal from '../../common/modal/modal';
import Footer from '../../common/footer/Footer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import numberToCost from '../../common/util/numberToCost';

const CostList = (props) => {
  const styles = styleSheet()
  const [listData, setListData] = useState([])
  const [eventOption, setEventOption] = useState([])
  const [openModal, setOpenmodal] = useState(false)
  const [eventState, setEventState] = useState({
    eventId: "",
    eventNm: ""
  })
  const [dateState, setDateState] = useState({
    viewModal: false,
    fromToFlag: '',
    confirmFromDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    confirmToDate: new Date(),
  })

  useEffect(() => {
    callModalData()
  }, [])

  const convertDateToVal = (val) => {
    console.log(val)
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    return `${year}-${month}-${date}`
  }

  const callList = async () => {
    const { confirmFromDate, confirmToDate } = dateState
    const confirmFromVal = convertDateToVal(confirmFromDate)
    const confirmToVal = convertDateToVal(confirmToDate)
    const memberId = await AsyncStorage.getItem('memberId')
    const eventCode = await AsyncStorage.getItem('eventCode')
    // const response = await client.get(`rest/v1/s0221a0070/retrieve-cost-req?mobileMemberId=${memberId}&fromDate=${confirmFromVal}&toDate=${confirmToVal}&eventCode=${eventCode}`)
    //   .catch((e) => console.log(JSON.stringify(e, null, 4)))
    // console.log(JSON.stringify(response?.data, null, 4))
    const response = await retrieveCostReq(memberId, confirmFromVal, confirmToVal, eventCode)
    setListData(response?.data?.data || [])
  }

  const callModalData = async () => {
    const eventCode = await AsyncStorage.getItem('eventCode')
    // const res = await client.get(`/rest/v1/s0221a2000/event-list?&eventCode=${eventCode}&orgId=39`).catch(e => {
    //   console.log(JSON.stringify(e, null, 4))
    // })
    // console.log(JSON.stringify(res, null, 4))
    const res = await eventListReq(39, eventCode)
    if (res.status === 200) {
      const option = res.data?.data?.map(i => {
        return {
          text: i.eventNm, value: i.eventId
        }
      })
      setEventOption(option)
    }
  }

  const modalOnClick = (value, text) => {
    setEventState({ eventId: value, eventNm: text })
    setOpenmodal(false)
  }

  const confirmDateChange = (val, flag) => {
    if (flag === 'from') {
      setDateState({ ...dateState, confirmFromVal: convertDateToVal(val), confirmFromDate: val, viewModal: false })
    } else {
      setDateState({ ...dateState, confirmToVal: convertDateToVal(val), confirmToDate: val, viewModal: false })
    }
  }

  const openDateModal = (flag) => {
    setDateState({ ...dateState, viewModal: true, fromToFlag: flag })
  }

  const listItem = (item, index) => {
    try {
      const title = item?.useSubject
      const cutTitle = title ? `${title?.substring(0, 11)}...` : ""
      return (
        <>
          <TouchableOpacity key={index} onPress={() => { props.navigation.navigate('CostModify', { data: { ...item }, refresh: callList }) }}>
            <View style={styles.cell} >
              <View style={styles.cellInner}>
                <Text style={styles.cellTitle}>{cutTitle}</Text>
                <Text style={styles.cellDate}>
                  <Text style={styles.name}>{item?.memberName}</Text> {item?.useDate}
                </Text>
                <Text style={styles.cellAmount}>{numberToCost(item?.useAmount) && `${numberToCost(item?.useAmount)} 원`}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.cellDivider}></View>
        </>

      )
    } catch (error) {
      console.log(error)
      return <View></View>
    }
  }

  return (
    <View>
      <View style={styles.wrap} contentContainerStyle={{ flex: 1 }}>
        <View style={styles.topMenu}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>비용요청현황</Text>
        </View>
        <View style={styles.inner}>
          <View style={styles.layer1}>
            <View style={styles.searchDate}>
              <Text style={styles.inputDate}
                type="date"
                required aria-required="true"
                editable={false}
                onPress={() => openDateModal('from')}>{convertDateToVal(dateState.confirmFromDate) || `날짜선택`}</Text>
              <Text style={styles.wave}>~</Text>
              <Text style={styles.inputDate}
                type="date"
                required aria-required="true"
                editable={false}
                onPress={() => openDateModal('to')}>{convertDateToVal(dateState.confirmToDate) || `날짜선택`}</Text>
            </View>

            <View style={styles.searchBtn}>
              <TouchableOpacity onPress={() => {
                callList()
              }}>
                <ReactImage source={require('./assets/searchIcon.png')} style={styles.searchIcon}></ReactImage>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider}></View>

        </View>
        <View style={styles.cellWrap}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            {listData.map((t, i) => listItem(t, i))}
          </ScrollView>
        </View>

        <View style={styles.regBtnWrap}>
          <TouchableOpacity style={styles.regBtn} onPress={() => {
            props.navigation.navigate('Cost', { refresh: callList })
          }}>
            <Text style={styles.regBtnText}>등록</Text>
          </TouchableOpacity>
        </View>
        <TempoModal
          openModal={openModal}
          onClick={modalOnClick}
          onClose={() => setOpenmodal(false)}
          option={eventOption}
        />
        <DateTimePickerModal
          isVisible={dateState.viewModal}
          mode="date"
          onConfirm={(a) => confirmDateChange(a, dateState.fromToFlag)}
          onCancel={() =>
            setDateState({ ...dateState, viewModal: false })
          }
          date={dateState.fromToFlag === 'from' ? dateState.confirmFromDate : dateState.confirmToDate}
        />
      </View >
      <Footer
        navigation={props.navigation}
      />
    </View>

  )
}

export default CostList