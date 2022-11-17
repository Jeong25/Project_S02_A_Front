import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import Footer from '../../common/footer/Footer';
import { deptLevelReq } from '../store/store';


const DepReg = (props) => {

  DepReg.defaultProps = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
  }
  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])

  const [orgId, setOrgId] = useState('')
  const [deptLevel, setDeptLevel] = useState([])

  useEffect(() => {
    const callData = async () => {
      const orgId = props.route.params.orgId
      setOrgId(orgId)
      const res = await deptLevelReq(orgId)
      setDeptLevel(res)
    }
    callData()
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
            <Text style={styles.title}>부서정보</Text>
            <View style={styles.regBtnWrap}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Tempo', { highEvId: 0, eventLv: 0, eventTp: 'D' })}>
                <ReactImage source={require('../../common/img/registIcon.png')} style={styles.registIcon} />
              </TouchableOpacity>
            </View>
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
                      <Text style={styles.cellTitle}>{v.eventNm}</Text>
                      <TouchableOpacity style={styles.plusIcon} onPress={() => props.navigation.navigate('Tempo', { highEvId: v.eventId, eventLv: v.eventLevel + 1, eventTp: 'A' })}>
                        <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.dropDownBtn} onPress={() => props.navigation.navigate('MemberList', { eventId: v.eventId, orgId: orgId })}>
                      <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                    </TouchableOpacity>
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
                            <Text style={styles.cellTitle}>{v2.eventNm}</Text>
                            <TouchableOpacity style={styles.plusIcon} onPress={() => props.navigation.navigate('Tempo', { highEvId: v2.eventId, eventLv: v2.eventLevel + 1, eventTp: 'A' })}>
                              <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                            </TouchableOpacity>
                          </View>
                          <View style={styles.dropDownBtn}>
                            <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                          </View>
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
                                <Text style={styles.cellTitle}>{v3.eventNm}</Text>
                                <TouchableOpacity style={styles.plusIcon} onPress={() => props.navigation.navigate('Tempo', { highEvId: v3.eventId, eventLv: v3.eventLevel + 1, eventTp: 'A' })}>
                                  <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                                </TouchableOpacity>
                              </View>
                              <View style={styles.dropDownBtn}>
                                <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                              </View>
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


