import React, { Component, useEffect, useMemo, useState,Fragment } from 'react';
import { Text, SafeAreaView, View, TextInput, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { retrieveMemReq } from '../../DepReg/store/store';

const SearchMemList = (props) => {

  const styles = styleSheet()
  const [searchProps, setSearchProps] = useState({memberName: ''})
  const [memData, setMemData] = useState([])

  const getData = async () => {
    const orgId = await AsyncStorage.getItem('orgId')
    const params = {
      orgId: orgId,
      memberName: searchProps.memberName
    }
    const res = await retrieveMemReq(params);
    setMemData(res)
    Keyboard.dismiss()
  }

  const onClick = (memberId, memberName) => {
    props.route.params.setInputData({...props.route.params.inputData, eventHostId: memberId, eventHostName: memberName})
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
                onChange={(e) => setSearchProps({...searchProps, memberName: e.nativeEvent.text})}
              ></TextInput>
            </View>

            <View style={styles.searchBtn}>
              <TouchableOpacity onPress={() => getData()}>
                <ReactImage source={require('../../common/img/searchIcon.png')} style={styles.searchIcon}></ReactImage>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.cellWrap}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
              {memData.map((v, i) => (
                <View key={i}>
                  <View>
                    <TouchableOpacity onPress={() => onClick(v.memberId, v.memberName)}>
                      <View style={styles.cell}>
                        <View style={styles.cellInner}>
                          <Text style={styles.name}>{v.memberName}</Text>
                          <Text style={styles.phoneNm}>{v.hpNo}</Text>
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

      </SafeAreaView>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }}/>
    </Fragment>
  )
}

export default SearchMemList

