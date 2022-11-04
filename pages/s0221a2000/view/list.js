import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { eventListReq } from '../store/store'
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../common/footer/Footer';

const EventList = (props) => {

  const [eventInfo, setEventInfo] = useState([])
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
    console.log('Log확인 '+res)
    return res
  }

  const onClick = (eventId, eventNm) => {
    const data = { "eventId": eventId, 'eventNm': eventNm }
    props.route.params.getEventInfo(data)
    props.navigation.goBack()
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
    <SafeAreaView style={{backgroundColor:'white'}}>
      <View style={styles.wrap}>
        <View style={styles.topMenu}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>행사현황</Text>
        </View>
        <View style={styles.layer1}>
          <View style={styles.inputWrap}>
          <TextInput style={styles.input}
            placeholder="행사명으로 검색"
            placeholderTextColor="#888" 
          ></TextInput>
          </View>
          
          <View style={styles.searchBtn}>
            <TouchableOpacity>
              <ReactImage source={require('./assets/searchIcon.png')} style={styles.searchIcon}></ReactImage>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.cellWrap}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            {eventInfo.map((v, i) => (
              <View key={i}>
                <View>
                  <TouchableOpacity onPress={() => onClick(v.eventId, v.eventNm)}>
                    <View style={styles.cell}>
                      <View style={styles.cellInner}>
                        <Text style={styles.eventName}>{v.eventPath}</Text>
                        {/* <Text style={styles.eventName}>{v.eventNm}</Text> */}
                        <Text style={styles.eventDate}>운영자 / {showDate(v)}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.cellDivider}></View>
              </View>
            ))}
          </ScrollView>
        </View>

      </View >
      <Footer
        navigation={props.navigation}
      />
    </SafeAreaView>
  )
}

export default EventList

