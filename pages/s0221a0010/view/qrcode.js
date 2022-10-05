import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../common/footer/Footer';
// import client from '../../common/api/client';
import { useStateCntReq, payCntReq } from '../store/store';
import { setUserTp } from '../../common/lib/getuserinfo';

const QrCode = (props) => {
  const [memberName, setMemberName] = useState('')
  const [eventNm, setEventNm] = useState('')
  const [eventRole, setEventRole] = useState('')
  const [statusCnt, setStatusCount] = useState({})
  const [payCnt, setPayCnt] = useState(0)
  // const [hpNo, setHpNo] = useState('')
  // const [eventCode, setEventCode] = useState('')
  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      const localName = await AsyncStorage.getItem('memberName')
      const localHpNo = await AsyncStorage.getItem('hpNo')
      const localEventCode = await AsyncStorage.getItem('eventCode')
      if (localName) {
        setMemberName(localName)
      }
      await setUserTp()
      const localEventNm = await AsyncStorage.getItem('eventNm')
      const localEventRole = await AsyncStorage.getItem('eventRole')
      setEventNm(localEventNm)
      setEventRole(localEventRole)
      await getUserInfo(localHpNo, localEventCode)
    }
    getData()
  }, [isFocused])

  const logOut = async () => {
    await AsyncStorage.setItem('id', '')
    await AsyncStorage.setItem('hpNo', '')
    await AsyncStorage.setItem('memberTp', '')
    await AsyncStorage.setItem('eventNm', '')
    await AsyncStorage.setItem('eventRole', '')
    await AsyncStorage.setItem('mobileId', '')
    await AsyncStorage.setItem('memberName', '')
    props.navigation.reset({ routes: [{ name: 'Signup' }] })
  }

  const getUserInfo = async (hpNo, eventCode) => {
    // const statCountResult = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`)
    const statCountResult = await useStateCntReq(hpNo, eventCode);
    const reduceStatCnt = statCountResult?.data?.data?.reduce((a, b) => {
      return {
        ...a,
        [b.useProStatus]: b.cnt
      }
    }, {}) || {}
    setStatusCount(reduceStatCnt)
    // const payCountResult = await client.get(`/rest/v1/s0221a0010/pay-cnt?eventCode=${eventCode}&hpNo=${hpNo}`)
    const payCountResult = await payCntReq(hpNo, eventCode)
    const reducePayCnt = payCountResult?.data?.data[0]?.payCnt || 0
    setPayCnt(reducePayCnt)
  }

  return (
    <View>
      <View style={styles.wrap} contentContainerStyle={{ flex: 1, height: 500 }}>
        <View style={styles.circle}></View>
        <View style={styles.topMenu}>
          <View style={styles.topLogoWrap}>
            <Text style={styles.topLogo}>TOVE</Text>
          </View>
          <View style={styles.logoutBtn}>
            <TouchableOpacity onPress={() => logOut()}>
              <ReactImage source={require('./assets/power-off-w.png')} style={styles.logout} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.profileCard} >
            <View style={styles.profileTextGroup}>
              <Text style={styles.memberName}>{memberName}</Text>
              <Text style={styles.memberPosition}>{eventNm} / {eventRole}</Text>
            </View>
            <View style={styles.processInfoWrap}>
              <View style={styles.leftProcessBox}>
                <Text style={styles.processTitle}>비용요청 진행현황</Text>
                <View style={styles.processInner}>
                  <View style={styles.process}>
                    <Text style={styles.processText}>
                      요청
                    </Text>
                    <Text style={styles.processNumber}>
                      {statusCnt?.A || 0}
                    </Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>
                    <Text style={styles.processText}>
                      진행 / 완료
                    </Text>
                    <Text style={styles.processNumber}>
                      {(statusCnt?.B || 0) + (statusCnt?.C || 0)}
                    </Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>
                    <Text style={styles.processText}>
                      지급
                    </Text>
                    <Text style={styles.processNumber}>
                      {statusCnt?.D || 0}
                    </Text>
                  </View>
                  <View style={styles.divider}></View>
                  <View style={styles.process}>
                    <Text style={styles.processText}>
                      반려
                    </Text>
                    <Text style={styles.processNumber}>
                      {statusCnt?.E || 0}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.rightProcessBox}>
                <Text style={styles.processTitle}>결제진행</Text>
                <View style={styles.processInner}>
                  <View style={styles.processRight}>
                    <Text style={styles.processText}>
                      요청
                    </Text>
                    <Text style={styles.processNumber}>
                      {payCnt}
                    </Text>

                  </View>
                </View>
              </View>

            </View>

          </View>
          <View style={styles.centerBtnWrap}>
            <View style={styles.layer1}>

              <TouchableOpacity style={styles.centerCostBtnWrap} onPress={() => props.navigation.navigate('CostList')}>
                <View style={styles.centerCostBtn}>
                  <ReactImage source={require('./assets/receipt-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>비용등록</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.centerpaymentBtnWrap} onPress={() => props.navigation.navigate('PaymentList')}>
                <View style={styles.centerpaymentBtn}>
                  <ReactImage source={require('./assets/stamp-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>비용결제</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.layer2}>
              <TouchableOpacity style={styles.centerQrBtnWrap} onPress={() => props.navigation.navigate('')}>
                <View style={styles.centerQrBtn}>
                  <ReactImage source={require('./assets/sampleQr-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>QR보기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.centerGuideBtnWrap} onPress={() => props.navigation.navigate('')}>
                <View style={styles.centerGuideBtn}>
                  <ReactImage source={require('./assets/guide-w.png')} style={styles.centerIcon} />
                </View>
                <Text style={styles.centerText}>가이드</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
      <Footer
        navigation={props.navigation}
      />
    </View>

  );
}

export default QrCode

QrCode.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
