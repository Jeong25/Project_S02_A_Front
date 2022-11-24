import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Keyboard, Alert, Modal } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../../common/footer/Footer';
import { useStateCntReq, payCntReq, recentEventReq } from '../store/store';
import { setUserTp } from '../../common/lib/getuserinfo';
import QrModal from '../../common/Alert/Toast/Alert';
// import QrModal from '../../common/modal/s0221a0040/QrModal';
import FaqModal from '../../common/modal/s0221a0130/faqmodal';
import EvtDetailModal from '../../common/modal/s0221a2001/evtDetailModal';

const QrCode = (props) => {
  const [orgId, setOrgId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [eventId, setEventId] = useState('')
  const [eventIdMd, setEventIdMd] = useState('')
  const [eventNm, setEventNm] = useState('')
  const [eventRole, setEventRole] = useState('')
  const [statusCnt, setStatusCount] = useState({})
  const [payCnt, setPayCnt] = useState(0)
  // const [hpNo, setHpNo] = useState('')
  // const [eventCode, setEventCode] = useState('')

  const [modalVisible, setModalVisible] = useState(false);


  const [qrModalBool, setQrModalBool] = useState(false)
  const [faqModalBool, setFaqModalBool] = useState(false)

  const [evtDetailModal, setEvtDetailModal] = useState(false)
  const [recentEvent, setRecentEvent] = useState([]);
  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])
  const isFocused = useIsFocused();
  const nonShutDown = true;

  useEffect(() => {
    const getData = async () => {
      const localName = await AsyncStorage.getItem('memberName')
      const localHpNo = await AsyncStorage.getItem('hpNo')
      const localOrgId = await AsyncStorage.getItem('orgId')
      const localEventCode = await AsyncStorage.getItem('eventCode')
      if (localName) {
        setMemberName(localName)
      }
      if (localOrgId) {
        setOrgId(localOrgId)
      }
      await setUserTp()
      const localEventNm = await AsyncStorage.getItem('eventNm')
      const localEventRole = await AsyncStorage.getItem('eventRole')
      setEventNm(localEventNm)
      setEventRole(localEventRole)
      await getUserInfo(localHpNo, localEventCode)
      await getRecentEvent(localOrgId, localEventCode)
    }
    getData()
  }, [isFocused])

  const logOut = async () => {
    await AsyncStorage.setItem('memberName', '')
    await AsyncStorage.setItem('hpNo', '')
    await AsyncStorage.setItem('eventCode', '')
    await AsyncStorage.setItem('orgEventName', '')
    await AsyncStorage.setItem('memberTp', '')
    await AsyncStorage.setItem('mobileId', '')
    await AsyncStorage.setItem('orgId', '')
    await AsyncStorage.setItem('memberId', '')
    await AsyncStorage.setItem('eventNm', '')
    await AsyncStorage.setItem('eventRole', '')
    await AsyncStorage.setItem('eventId', '')
    await AsyncStorage.setItem('defaultEventId', '')
    props.navigation.reset({ routes: [{ name: 'Signin' }] })
  }

  const getUserInfo = async (hpNo, eventCode) => {
    // const statCountResult = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`)
    const statCountResult = await useStateCntReq(hpNo, eventCode)
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

  const getRecentEvent = async (orgId, eventCode) => {
    const res = await recentEventReq(orgId, eventCode)
    setRecentEvent(res.data.data)
  }

  const openQrModal = () => {
    Keyboard.dismiss()
    setQrModalBool(true)
  }

  const openEvtDetailModal = (eventId) => {
    setEventIdMd(eventId)
    Keyboard.dismiss()
    setEvtDetailModal(true)
  }
  const openFaqModal = () => {
    Keyboard.dismiss()
    setFaqModalBool(true)
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.wrap}>
        <View style={styles.topMenu}>
          <Text style={styles.topLogo}>삐용</Text>
          <TouchableOpacity style={styles.profileTextGroup} onPress={() => props.navigation.navigate('UserData')}>
            <Text style={styles.memberPosition}>{`${eventNm} / ${eventRole ? eventRole : '일반회원'}`}</Text>
          </TouchableOpacity>
          <View style={styles.accountBtnWrap}>
            <View style={styles.logoutBtn}>
              <TouchableOpacity onPress={() => logOut()}>
                <ReactImage source={require('../../common/img/power-off.png')} style={styles.logout} />
              </TouchableOpacity>
            </View>
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
          <View style={styles.infoCard} >
            <View style={styles.upperProcessBox}>
              <View style={styles.leftBox}>
                <View style={styles.upperProcessInner}>
                  <TouchableOpacity style={styles.upperProcess} onPress={() => props.navigation.navigate('CostList', { usePS: 'A' })}>
                    <Text style={styles.processText}>
                      비용요청
                    </Text>
                    <Text style={styles.processNumber}>
                      {statusCnt?.A || 0}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.divider}></View>
                  <TouchableOpacity style={styles.upperProcess} onPress={() => props.navigation.navigate('CostList', { usePS: 'E' })}>
                    <Text style={styles.processText}>
                      결제반려
                    </Text>
                    <Text style={styles.processNumber}>
                      {statusCnt?.E || 0}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.rightBox}>
                <View style={styles.upperProcessInner}>
                  <TouchableOpacity style={styles.rightUpperProcess} onPress={() => props.navigation.navigate('PaymentList', { delDate: true })}>
                    <Text style={styles.processText}>
                      결제대기
                    </Text>
                    <Text style={styles.processNumber}>
                      {payCnt || 0}
                      {/* {(statusCnt?.B || 0) + (statusCnt?.C || 0)} */}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.underProcessBox}>
              <View style={styles.processInner}>
                <TouchableOpacity style={styles.process} onPress={() => props.navigation.navigate('CostList', { usePS: 'B' })}>
                  <Text style={styles.processText}>
                    결제진행
                  </Text>
                  <Text style={styles.processNumber}>
                    {statusCnt?.B || 0}
                  </Text>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.process} onPress={() => props.navigation.navigate('CostList', { usePS: 'C' })}>
                  <Text style={styles.processText}>
                    결제완료
                  </Text>
                  <Text style={styles.processNumber}>
                    {statusCnt?.C || 0}
                  </Text>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.process} onPress={() => props.navigation.navigate('CostList', { usePS: 'D' })}>
                  <Text style={styles.processText}>
                    비용지급
                  </Text>
                  <Text style={styles.processNumber}>
                    {statusCnt?.D || 0}
                  </Text>
                </TouchableOpacity>
                <View style={styles.divider}></View>
                <TouchableOpacity style={styles.process} onPress={() => props.navigation.navigate('CostList', { usePS: 'F' })}>
                  <Text style={styles.processText}>
                    요청취소
                  </Text>
                  <Text style={styles.processNumber}>
                    {statusCnt?.F || 0}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.centerBtnWrap}>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('CostList', { usePS: '' })}>
              <View style={styles.btnImg}>
                <ReactImage source={require('../../common/img/receipt.png')} style={styles.centerIcon} />
              </View>
              <Text style={styles.centerText}>비용조회</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('PaymentList')}>
              <View style={styles.btnImg}>
                <ReactImage source={require('../../common/img/stamp.png')} style={styles.centerIcon} />
              </View>
              <Text style={styles.centerText}>비용결제</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => openQrModal()}>
              <View style={styles.btnImg}>
                <ReactImage source={require('../../common/img/sampleQr.png')} style={styles.centerIcon} />
              </View>
              <Text style={styles.centerText}>QR보기</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('DepReg', { orgId: orgId })}>
              <View style={styles.btnImg}>
                <ReactImage source={require('../../common/img/group.png')} style={styles.centerIcon} />
              </View>
              <Text style={styles.centerText}>부서등록</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => openFaqModal()}>
              <View style={styles.btnImg}>
                <ReactImage source={require('../../common/img/faq.png')} style={styles.centerIcon} />
              </View>
              <Text style={styles.centerText}>FAQ</Text>

            </TouchableOpacity> */}
          </View>
          <View style={styles.contentsDivider} />
          <View style={styles.recentListWrap}>
            <View style={styles.listTitleWrap}>
              <Text style={styles.listTitle}>최근 등록된 행사</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('EventList', { nonShutDown: nonShutDown })
                }}
              >
                <Text style={styles.showMore}>더보기 {'>'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cellWrap}>
              {recentEvent?.map((v, i) => (
                <TouchableOpacity style={styles.cell} key={i} onPress={() => openEvtDetailModal(v.eventId)}>
                  <Text style={styles.cellTitle}>{v.eventPath}</Text>
                  <Text style={styles.cellDate}>{v.eventHostName} / {v.eventStartDate.split(' ')[0]} ~ {v.eventEndDate.split(' ')[0]} / {v.eventCode}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        
        <QrModal
          openModal={qrModalBool}
          onClose={() => setQrModalBool(false)}
        />
        <EvtDetailModal
          openModal={evtDetailModal}
          eventId={eventIdMd}
          onClose={() => setEvtDetailModal(false)}
        />
        <FaqModal
          openModal={faqModalBool}
          onClose={() => setFaqModalBool(false)}
        />
      </View>
      <Footer
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
}

export default QrCode

QrCode.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
