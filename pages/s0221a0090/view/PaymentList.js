import React, { Component, useEffect, useMemo, useState } from 'react';
import { Text, View, TextInput, ScrollView,SafeAreaView } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import { costPayListReq } from '../store/store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../common/footer/Footer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import numberToCost from '../../common/util/numberToCost';

const PaymentList = (props) => {
  const styles = styleSheet()
  const [listData, setListData] = useState([])
  const [dateState, setDateState] = useState({
    viewModal: false,
    fromToFlag: '',
    confirmFromDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    confirmToDate: new Date(),
  })

  useEffect(() => {
    callList()
  }, [])

  const callList = async () => {
    const { confirmFromDate, confirmToDate } = dateState
    const confirmFromVal = convertDateToVal(confirmFromDate)
    const confirmToVal = convertDateToVal(confirmToDate)
    const memberId = await AsyncStorage.getItem('memberId')
    const eventCode = await AsyncStorage.getItem('eventCode')
    const response = await costPayListReq(memberId, confirmFromVal, confirmToVal, eventCode)
    setListData(response?.data?.data || [])
  }

  const convertDateToVal = (val) => {
    console.log(val)
    const year = val.getFullYear()
    const month = val.getMonth() + 1
    const date = val.getDate()
    return `${year}-${month}-${date}`
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
      const eventUseId = item?.eventUseId
      const title = item?.useSubject
      const cutTitle = title ? `${title?.substring(0, 11)}...` : ""
      console.log(item)
      return (
        <View key={index}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('Payment', { eventUseId: eventUseId, refresh: callList })
          }}>
            <View style={styles.cell} >
              <View style={styles.cellInner}>
                <Text style={styles.cellTitle}>{cutTitle}</Text>
                <Text style={styles.cellDate}>
                  <Text style={styles.name}>{item?.memberName}</Text> / {item?.usedDate} / {item?.useProStatusNm}
                </Text>
                <Text style={styles.cellAmount}>{numberToCost(item?.useAmount) && `${numberToCost(item?.useAmount)} 원`}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.cellDivider}></View>
        </View>
      )
    } catch (error) {
      console.log(error)
      return <View></View>
    }
  }

  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
      <View style={styles.wrap}>
        <View style={styles.topMenu}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>결제요청현황</Text>
        </View>

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
        <View style={styles.cellWrap}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            {listData.map((t, i) => listItem(t, i))}
          </ScrollView>
        </View>
      </View >
      <DateTimePickerModal
        isVisible={dateState.viewModal}
        mode="date"
        onConfirm={(a) => confirmDateChange(a, dateState.fromToFlag)}
        onCancel={() =>
          setDateState({ ...dateState, viewModal: false })
        }
        date={dateState.fromToFlag === 'from' ? dateState.confirmFromDate : dateState.confirmToDate}
      />
      <Footer
        navigation={props.navigation}
      />
    </SafeAreaView>
  )
}

export default PaymentList