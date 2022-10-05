import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { eventListReq } from '../store/store'
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.wrap}>
      <View style={styles.topMenu}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>행사현황</Text>
      </View>
      <View style={styles.inner}>
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
      </View>
      <View style={styles.cellWrap}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
          {eventInfo.map((v, i) => (
            <View key={i}>
              <View style={styles.cellWrap}>
                <TouchableOpacity onPress={() => onClick(v.eventId, v.eventNm)}>
                  <View style={styles.cell}>
                    <Text style={styles.cellName}>{v.eventNm}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.divider}></View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View >
  )
}

export default EventList
