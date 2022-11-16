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

  useEffect(async () => {
    const orgId = props.route.params.orgId
    setOrgId(orgId)
    const res = await deptLevelReq(orgId)
    setDeptLevel(res)
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
            <Text style={styles.title}>부서등록</Text>
            <View style={styles.regBtnWrap}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Tempo')}>
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
                <View style={styles.level1}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('MemberList', {eventId: v.eventId, orgId: orgId})}>
                    <View style={styles.titleWrap}>
                      <Text style={styles.cellTitle}>{v.eventNm}</Text>
                      <TouchableOpacity style={styles.plusIcon}>
                        <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.dropDownBtn}>
                      <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                  {deptLevel.filter(data => data.highEventId === v.eventId).map((v2, i2) => (
                    <View style={styles.level2Wrap}>
                      <View style={styles.level2}>
                        <Text style={styles.cellTitle}>{v2.eventNm}</Text>
                      </View>
                      <TouchableOpacity style={styles.plusIcon}>
                        <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                      </TouchableOpacity>
                      <View style={styles.dropDownBtn}>
                        <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                      </View>
                      <View style={styles.divider} />
                      {deptLevel.filter(data => data.highEventId === v2.eventId).map((v3, i3) => (
                        <View style={styles.level3Wrap}>
                          <View style={styles.level3}>
                            <Text style={styles.cellTitle}>{v3.eventNm}</Text>
                          </View>
                          <TouchableOpacity style={styles.plusIcon}>
                            <ReactImage source={require('../../common/img/plus.png')} style={styles.plus} />
                          </TouchableOpacity>
                          <View style={styles.dropDownBtn}>
                            <ReactImage source={require('../../common/img/down-arrow.png')} style={styles.dropDownIcon} />
                          </View>
                          <View style={styles.divider} />
                          {deptLevel.filter(data => data.highEventId === v3.eventId).map((v4, i4) => (
                            console.log(v4)
                          ))}
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              ))}
              {/* <Text style={styles.memberNumber}>
                <ReactImage source={require('../../common/img/member.png')} style={styles.memberIcon} /> 14명
              </Text> */}
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


