import React, { Component, useEffect, useMemo, useState,Fragment } from 'react';
import { Text, SafeAreaView, View, TextInput, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchMemList = (props) => {

  const [eventInfo, setEventInfo] = useState([])
  const [eventIdMd, setEventIdMd] = useState('')
  const [evtDetailModal, setEvtDetailModal] = useState(false)
  const [userName, setUserName] = useState('')
  const styles = styleSheet()

  const getData = async () => {
    const orgId = await AsyncStorage.getItem('orgId')
    const eventCode = await AsyncStorage.getItem('eventCode')
    const res = await eventListReq(orgId, eventCode)
    setEventInfo(res.data.data)
  }

  const showDate = (v) => {
    const val1 = JSON.stringify(v.eventStartDate).split(' ')[0].substring(1)
    const val2 = JSON.stringify(v.eventEndDate).split(' ')[0].substring(1)
    const res = `${val1} ~ ${val2}`
    return res
  }

  const onClick = (eventId, eventNm) => {
    const data = { "eventId": eventId, 'eventNm': eventNm }
    if (props.route.params.nonShutDown) {
      setEventIdMd(eventId)
      Keyboard.dismiss()
      setEvtDetailModal(true)
    } else {
      props.route.params.getEventInfo(data)
      props.navigation.goBack()
    }
  }

  useEffect(() => {
    let isCompMounted = true
    if (isCompMounted) {
      getData()
    }
    return () => {
      isCompMounted = false
    }
  }, [])

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
        <View style={styles.wrap}>
          <View style={styles.topMenu}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <ReactImage source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>책임자 검색</Text>
          </View>
          <View style={styles.layer1}>
            <View style={styles.inputWrap}>
              <TextInput style={styles.input}
                placeholder="이름으로 검색"
                placeholderTextColor="#888"
              ></TextInput>
            </View>

            <View style={styles.searchBtn}>
              <TouchableOpacity>
                <ReactImage source={require('../../common/img/searchIcon.png')} style={styles.searchIcon}></ReactImage>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.cellWrap}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
              {/* {eventInfo.map((v, i) => ( */}
                <View>
                  <View>
                    <TouchableOpacity>
                      <View style={styles.cell}>
                        <View style={styles.cellInner}>
                          <Text style={styles.name}>황어진</Text>
                          <Text style={styles.phoneNm}>010-9151-8714</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cellDivider}></View>
                </View>
              {/* ))} */}
            </ScrollView>
          </View>
        </View >

      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}/>
    </Fragment>
  )
}

export default SearchMemList

