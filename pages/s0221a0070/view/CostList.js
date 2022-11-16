import React, { Component, Fragment, useEffect, useMemo, useState } from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { styleSheet } from './stylesheet';
import { retrieveCostReq } from '../store/store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import Footer from '../../common/footer/Footer';
import numberToCost from '../../common/util/numberToCost';
import { useIsFocused } from '@react-navigation/native';

const CostList = (props) => {
  const styles = styleSheet()
  const isFocused = useIsFocused();
  const [listData, setListData] = useState([])
  const [writeAuth, setWriteAuth] = useState('N')
  const [useProStatus, setUseProStatus] = useState('')
  const [onDate, setOnDate] = useState(true)
  const [dateState, setDateState] = useState({
    viewModal: false,
    fromToFlag: '',
    confirmFromDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    confirmToDate: new Date(),
  })

  useEffect(() => {
    const usePS = props.route.params.usePS
    if (usePS !== '') {
      startList(usePS)
      props.route.params.usePS = ''
    } else {
      callList()
    }
  }, [isFocused])

  const startList = async (usePS) => {
    const useRegFlag = await AsyncStorage.getItem('useRegFlag')
    const memberId = await AsyncStorage.getItem('memberId')
    const eventCode = await AsyncStorage.getItem('eventCode')
    const confirmFromVal = ''
    const confirmToVal = ''
    setWriteAuth(useRegFlag)
    setUseProStatus(usePS)
    setOnDate(false)
    const response = await retrieveCostReq(memberId, confirmFromVal, confirmToVal, eventCode, usePS)
    setListData(response?.data?.data || [])
  }

  const callList = async () => {
    const useRegFlag = await AsyncStorage.getItem('useRegFlag')
    const memberId = await AsyncStorage.getItem('memberId')
    const eventCode = await AsyncStorage.getItem('eventCode')
    const { confirmFromDate, confirmToDate } = dateState
    const confirmFromVal = convertDateToVal(confirmFromDate)
    const confirmToVal = convertDateToVal(confirmToDate)
    setWriteAuth(useRegFlag)
    const response = await retrieveCostReq(memberId, confirmFromVal, confirmToVal, eventCode, useProStatus)
    setListData(response?.data?.data || [])
  }

  const convertDateToVal = (val) => {
      const year = val.getFullYear()
      const month = val.getMonth() + 1
      const date = val.getDate()
      return `${year}-${month}-${date}`
  }

  const confirmDateChange = (val, flag) => {
    setOnDate(true)
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
        <View key={index}>
          <TouchableOpacity onPress={() => { props.navigation.navigate('CostModify', { data: { ...item }, refresh: callList }) }}>
            <View style={item?.useProStatus === 'B' || item?.useProStatus === 'C' || item?.useProStatus === 'D' ? styles.cellGreen : item?.useProStatus === 'E' || item?.useProStatus === 'F' ? styles.cellRed : styles.cellGray} >
              <View style={styles.cellInner}>
                <Text style={styles.cellTitle}>{cutTitle}</Text>
                <Text style={styles.cellDate}>
                  {item?.usedDate} / {numberToCost(item?.useAmount) && `${numberToCost(item?.useAmount)} 원`}
                </Text>
                <Text style={styles.cellAmount}>{item?.useProStatusNm}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.cellDivider}></View>
        </View>
      )
    } catch (error) {
      console.log(error)
      return <View key={index}></View>
    }
  }

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}
          scrollEnabled={true}
          contentContainerStyle={{ flex: 1 }}>
          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>비용요청현황</Text>
            {
              writeAuth === '\"Y\"' ?
                <View /> :
                <View style={styles.regBtnWrap}>
                  <TouchableOpacity onPress={() => {
                    {
                      writeAuth === '\"Y\"' ? Alert.alert('알림', '권한이 없는 사용자입니다.') :
                        props.navigation.navigate('Cost', { refresh: callList })
                    }
                  }}>
                    <ReactImage source={require('../../common/img/registIcon.png')} style={styles.registIcon} />
                  </TouchableOpacity>
                </View>
            }

          </View>
          <View style={styles.layer1}>
            <View style={styles.selectWrap}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                fixAndroidTouchableBug={true}
                placeholder={{
                  label: '상태선택', value: ''
                }}
                onValueChange={value => setUseProStatus(value)}
                items={[
                  { label: '비용요청', value: 'A' },
                  { label: '결제진행', value: 'B' },
                  { label: '결제완료', value: 'C' },
                  { label: '지급완료', value: 'D' },
                  { label: '결제반려', value: 'E' },
                  { label: '요청취소', value: 'F' },
                ]}
                value={useProStatus}
              />
            </View>
            <View style={styles.searchDate}>
              <Text style={styles.inputDate}
                type="date"
                required aria-required="true"
                editable={false}
                onPress={() => openDateModal('from')}>{onDate ? convertDateToVal(dateState.confirmFromDate) : '날짜 선택'}</Text>
              <Text style={styles.wave}>~</Text>
              <Text style={styles.inputDate}
                type="date"
                required aria-required="true"
                editable={false}
                onPress={() => openDateModal('to')}>{onDate ? convertDateToVal(dateState.confirmToDate) : '날짜 선택'}</Text>
            </View>

            <View style={styles.searchBtn}>
              <TouchableOpacity onPress={() => {
                callList()
              }}>
                <ReactImage source={require('../../common/img/searchIcon.png')} style={styles.searchIcon}></ReactImage>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider}></View>

          <ScrollView
            style={styles.cellWrap}
          >
            {listData.map((t, i) => listItem(t, i))}
          </ScrollView>

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
      </SafeAreaView>
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}>
      </SafeAreaView>
    </Fragment>

  )
}

export default CostList