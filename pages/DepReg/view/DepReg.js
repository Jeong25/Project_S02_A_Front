import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';
import { deptLevelReq } from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const DepReg = (props) => {

  DepReg.defaultProps = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
  }
  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])
  const isFocused = useIsFocused();

  const [orgId, setOrgId] = useState('')
  const [deptLevel, setDeptLevel] = useState([])

  useEffect(() => {
    const callData = async () => {
      const orgId = await AsyncStorage.getItem('orgId')
      setOrgId(orgId)
      const res = await deptLevelReq(orgId)
      setDeptLevel(res)
    }
    callData()
  }, [isFocused])

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
            <Text style={styles.title}>부서정보</Text>
            {/* <View style={styles.regBtnWrap}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Tempo', { highEvId: 0, eventLv: 0, eventTp: 'D' })}>
                <ReactImage source={require('../../common/img/registIcon.png')} style={styles.registIcon} />
              </TouchableOpacity>
            </View> */}
          </View>
          <ScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            enableOnAndroid={true}
            scrollEnabled={true}
            scrollToOverflowEnabled={true}
            enableAutomaticScroll={true}
            keyboardShouldPersistTaps='always'
            nestedScrollEnabled={true}
          >
            <View style={styles.contentsWrap}>
              {deptLevel.filter(data => data.eventLevel === 0).map((v, i) => (
                <View style={styles.level1} key={i}>
                  <TouchableOpacity
                    style={styles.cell}
                    onPress={() => props.navigation.navigate('Tempo', { eventId: v.eventId, eventTp: v.eventTp })}
                  >
                    <View style={styles.titleWrap}>
                      {/* <TouchableOpacity style={styles.dropDownBtn} >
                        <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                      </TouchableOpacity> */}
                      <Text style={styles.cellTitle}>{v.eventNm}</Text>
                    </View>
                    <View style={styles.iconWrap}>
                      <TouchableOpacity style={styles.infoIcon} onPress={() => props.navigation.navigate('MemberList', { eventId: v.eventId, orgId: orgId })}>
                        <ReactImage source={require('../../common/img/info.png')} style={styles.info} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.plusIcon} onPress={() => props.navigation.navigate('Tempo', { highEvId: v.eventId, eventLv: v.eventLevel + 1, eventTp: 'A' })}>
                        <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                  {deptLevel.filter(data => data.highEventId === v.eventId).map((v2, i2) => (
                    <View style={styles.level2Wrap} key={i2}>
                      <View style={styles.level2}>
                        <TouchableOpacity
                          style={styles.cell}
                          onPress={() => props.navigation.navigate('Tempo', { eventId: v2.eventId, eventTp: v2.eventTp })}
                        >
                          <View style={styles.titleWrap}>
                            {/* <View style={styles.dropDownBtn}>
                              <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                            </View> */}
                            <Text style={styles.cellTitle}>{v2.eventNm}</Text>
                          </View>
                          <TouchableOpacity style={styles.plusIcon} onPress={() => props.navigation.navigate('Tempo', { highEvId: v2.eventId, eventLv: v2.eventLevel + 1, eventTp: 'A' })}>
                            <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                          </TouchableOpacity>
                        </TouchableOpacity>
                      </View>
                      <View style={styles.divider} />
                      {deptLevel.filter(data => data.highEventId === v2.eventId).map((v3, i3) => (
                        <View style={styles.level3Wrap} key={i3}>
                          <View style={styles.level3}>
                            <TouchableOpacity
                              style={styles.cell}
                              onPress={() => props.navigation.navigate('Tempo', { eventId: v3.eventId, eventTp: v3.eventTp })}
                            >
                              <View style={styles.titleWrap}>
                                {/* <View style={styles.dropDownBtn}>
                                  <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                                </View> */}
                                <Text style={styles.cellTitle}>{v3.eventNm}</Text>
                              </View>
                              <TouchableOpacity style={styles.plusIcon} onPress={() => props.navigation.navigate('Tempo', { highEvId: v3.eventId, eventLv: v3.eventLevel + 1, eventTp: 'A' })}>
                                <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                              </TouchableOpacity>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.divider} />
                          {deptLevel.filter(data => data.highEventId === v3.eventId).map((v4, i4) => (
                            <View style={styles.level4} key={i4}>
                              <TouchableOpacity
                                style={styles.cell}
                                onPress={() => props.navigation.navigate('Tempo', { eventId: v4.eventId, eventTp: v4.eventTp })}
                              >
                                <View style={styles.titleWrap}>
                                  <Text style={styles.cellTitle}>{v4.eventNm}</Text>
                                </View>
                              </TouchableOpacity>
                              <View style={styles.divider} />
                            </View>
                          ))}
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView >
      <Footer
        navigation={props.navigation}
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    </Fragment >
  );
}

export default DepReg


