import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
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
  const styles = styleSheet()

  const getData = async () => {
    const orgId = await AsyncStorage.getItem('orgId')
    const eventCode = await AsyncStorage.getItem('eventCode')
    const res = await eventListReq(orgId, eventCode)
    setEventInfo(res.data.data)
  }

  const onClick = (eventId, eventNm) => {
    const data = { "eventId": eventId, 'eventNm': eventNm }
    props.route.params.getEventInfo(data)
    props.navigation.goBack()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
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
            <TextInput
              style={styles.input}
              placeholder="행사명으로 검색"
            ></TextInput>
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
              <View>
              <View key={i}>
                  <TouchableOpacity onPress={() => onClick(v.eventId, v.eventNm)}>
                    <View style={styles.cell}>
                      <View style={styles.cellInner}>
                        <Text style={styles.eventName}>{v.eventNm}</Text>
                        <Text style={styles.eventDate}>운영자 / 2022-01-01 ~ 2022-01-02</Text>
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
    </View>
  )
}

export default EventList

