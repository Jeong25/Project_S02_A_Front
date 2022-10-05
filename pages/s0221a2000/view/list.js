import React, { Component, useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { eventListReq } from '../store/store'
// import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EventList = (props) => {
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
        </ScrollView>
      </View>
    
      <View style={styles.bottomMenu}>
          <TouchableOpacity style={styles.homeBtn} onPress={() => props.navigation.navigate('QrCode')}>
            <View>
              <ReactImage source={require('./assets/home.png')} style={styles.homeIcon} />
              <Text style={styles.homeText} >홈</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.costListBtn} onPress={() => props.navigation.navigate('CostList')}>
            <View>
              <ReactImage source={require('./assets/receipt.png')} style={styles.costIcon} />
              <Text style={styles.costText} >비용등록</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentListBtn} onPress={() => props.navigation.navigate('PaymentList')}>
            <View>
              <ReactImage source={require('./assets/stamp.png')} style={styles.paymentIcon} />
              <Text style={styles.paymentText}>비용결제</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scanBtn} onPress={() => props.navigation.navigate('Qrscan')}>
            <View>
              <ReactImage source={require('./assets/scanIcon.png')} style={styles.scanBtnIcon} />
              <Text style={styles.qrscanText}>QR스캔</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View >
    )
}

export default EventList
