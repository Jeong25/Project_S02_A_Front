import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import { deptPayInfoReq, deptInfoReq, regUserReq } from '../../DepReg/store/store';
import SwitchToggle from "react-native-switch-toggle";
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from '../../common/Alert/Toast/Alert';

const MemberList = (props) => {

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])

  const [deptInfo, setDeptInfo] = useState({})
  const [userInfo, setUserInfo] = useState([])
  const [authArr, setAuthArr] = useState([])
  const [refresh, setRefresh] = useState(0)

  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertConfirm, setAlertConfirm] = useState(false)
  const [alertImage, setAlertImage] = useState('info')

  const cusAlert = async (message, image) => {
    setAlertMessage(message)
    setAlertImage(image)
    setAlertConfirm(false)
    setAlertOpen(true)
  }

  // 권한 설정
  const setUserAuth = (index) => {
    let arrAuth = authArr.slice()
    let arrUser = userInfo.slice()
    for (let i = 0; i < arrAuth.length; i++) {
      if (i === index) {
        arrAuth[i] = {
          id: arrAuth[i].id,
          useRegFlag: arrAuth[i].useRegFlag ? false : true
        }
      } else {
        arrAuth[i] = {
          id: arrAuth[i].id,
          useRegFlag: arrAuth[i].useRegFlag ? true : false
        }
      }
    }
    for (let i = 0; i < arrUser.length; i++) {
      if (arrUser[i].eventPayUserId === arrAuth[index].id) {
        arrUser[i] = {
          eventPayUserId: arrUser[i].eventPayUserId,
          eventPayLevel: arrUser[i].eventPayLevel,
          eventPayRoleCd: arrUser[i].eventPayRoleCd,
          useRegFlag: arrAuth[i].useRegFlag ? 'Y' : 'N',
          memberName: arrUser[i].memberName,
          hpNo: arrUser[i].hpNo,
        }
      } else {
        arrUser[i] = {
          eventPayUserId: arrUser[i].eventPayUserId,
          eventPayLevel: arrUser[i].eventPayLevel,
          eventPayRoleCd: arrUser[i].eventPayRoleCd,
          useRegFlag: arrUser[i].useRegFlag,
          memberName: arrUser[i].memberName,
          hpNo: arrUser[i].hpNo,
        }
      }
    }
    setAuthArr(arrAuth)
    setUserInfo(arrUser)
  }
  // 결제자 정보 초기화
  const initPayLv = (eventPayLevel) => {
    let arr = userInfo.slice()
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i].eventPayLevel) === Number(eventPayLevel)) {
        arr[i] = {
          eventPayUserId: arr[i].eventPayUserId,
          eventPayLevel: null,
          eventPayRoleCd: arr[i].eventPayRoleCd,
          useRegFlag: arr[i].useRegFlag,
          memberName: arr[i].memberName,
          hpNo: arr[i].hpNo,
        }
      } else {
        arr[i] = {
          eventPayUserId: arr[i].eventPayUserId,
          eventPayLevel: arr[i].eventPayLevel,
          eventPayRoleCd: arr[i].eventPayRoleCd,
          useRegFlag: arr[i].useRegFlag,
          memberName: arr[i].memberName,
          hpNo: arr[i].hpNo,
        }
      }
    }
    return arr
  }
  // 결제자 정보 설정
  const setPayLv = (eventPayUserId, eventPayLevel) => {
    const payId = eventPayUserId
    const payLv = eventPayLevel
    let arr = initPayLv(payLv)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].eventPayUserId === payId) {
        arr[i] = {
          eventPayUserId: arr[i].eventPayUserId,
          eventPayLevel: payLv,
          eventPayRoleCd: arr[i].eventPayRoleCd,
          useRegFlag: arr[i].useRegFlag,
          memberName: arr[i].memberName,
          hpNo: arr[i].hpNo,
        }
      } else {
        arr[i] = {
          eventPayUserId: arr[i].eventPayUserId,
          eventPayLevel: arr[i].eventPayLevel,
          eventPayRoleCd: arr[i].eventPayRoleCd,
          useRegFlag: arr[i].useRegFlag,
          memberName: arr[i].memberName,
          hpNo: arr[i].hpNo,
        }
      }
    }
    setUserInfo(arr)
  }

  // 등록
  const regUser = async () => {
    for (let i = 0; i < userInfo.length; i++) {
      if (userInfo[i].useRegFlag === 'Y') {
        if (userInfo[i].eventPayLevel === 1 || userInfo[i].eventPayLevel === 2 || userInfo[i].eventPayLevel === 3 || userInfo[i].eventPayLevel === 4) {
          cusAlert('결제자 지정 또는 권한 없음 중 하나만 선택해주세요.', '')
          return
        }
      }
    }
    let payFlag = ''
    for (let i = 0; i < userInfo.length; i++) {
      if (userInfo[i].eventPayLevel === 1) {
        payFlag = userInfo[i].eventPayUserId
      }
    }
    if (payFlag === '') {
      cusAlert('결제자를 한 명 이상 지정해주세요.', '')
      return
    }
    let countPayLv = []
    for (let i = 0; i < userInfo.length; i++) {
      if (userInfo[i].eventPayLevel === 1) { countPayLv.push(1) }
      if (userInfo[i].eventPayLevel === 2) { countPayLv.push(2) }
      if (userInfo[i].eventPayLevel === 3) { countPayLv.push(3) }
      if (userInfo[i].eventPayLevel === 4) { countPayLv.push(4) }
    }
    let countLv = userInfo[0].eventPayLevel
    for (let i = 0; i < userInfo.length; i++) {
      if (userInfo[i].eventPayLevel > countLv) {
        if (userInfo[i].eventPayLevel !== 99) {
          countLv = userInfo[i].eventPayLevel
        }
      }
    }
    if (countLv !== countPayLv.length) {
      cusAlert('결제자를 순번대로 지정해주세요.', '')
      return
    } else { }
    const eventId = props.route.params.eventId
    const memberId = await AsyncStorage.getItem('memberId')
    const res = await regUserReq(eventId, deptInfo, userInfo, memberId)
    if (res.data.status === 200) {
      cusAlert('사용자 정보가 저장되었습니다.', 'check')
      let count = refresh + 1
      setRefresh(count)
    }
  }

  useEffect(() => {
    const callData = async () => {
      const orgId = props.route.params.orgId
      const eventId = props.route.params.eventId
      const params = {
        orgId: orgId,
        eventId: eventId
      }
      const resDept = await deptInfoReq(eventId)
      const resUser = await deptPayInfoReq(params)
      let arr = []
      for (let i = 0; i < resUser.length; i++) {
        arr.push({
          id: resUser[i].eventPayUserId,
          useRegFlag: resUser[i].useRegFlag === 'Y' ? true : false
        })
      }
      setAuthArr(arr)
      setDeptInfo(resDept)
      setUserInfo(resUser)
    }
    callData()
  }, [refresh])

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
            <Text style={styles.title}>사용자 정보</Text>
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
              {userInfo.map((v, i) => (
                <View key={i}>
                  <View style={styles.cell}>
                    <View style={styles.cellInner}>
                      <View style={styles.cellTextWrap}>
                        <View style={styles.memberNameWrap}>
                          <Text style={styles.memberName}>{v.memberName}</Text>
                          <SwitchToggle
                            switchOn={!authArr[i].useRegFlag}
                            onPress={() => setUserAuth(i)}
                            circleColorOff='#333'
                            circleColorOn='#fff'
                            backgroundColorOn='#f15a24'
                            backgroundColorOff='#C4C4C4'
                            containerStyle={{
                              width: 30,
                              height: 15,
                              borderRadius: 25,
                            }}
                            circleStyle={{
                              width: 15,
                              height: 15,
                              borderRadius: 25,
                            }}
                          />
                        </View>
                        <Text style={styles.memberDetail}>
                          {v.hpNo}{v.eventPayRoleCd ? ` / ${v.eventPayRoleCd}` : ''}
                        </Text>
                      </View>
                      <View style={styles.selectBox}>
                        <RNPickerSelect
                          onValueChange={(value) => { setPayLv(v.eventPayUserId, value) }}
                          style={{
                            placeholder: { color: 'white' },
                            inputAndroid: styles.inputAndroid,
                            inputIOS: styles.inputIOS,
                            inputAndroidContainer: styles.inputContainer,
                            inputIOSContainer: styles.inputContainer,
                          }}
                          useNativeAndroidPickerStyle={false}
                          fixAndroidTouchableBug={true}
                          placeholder={{
                            label: '결제자 지정', value: ''
                          }}
                          items={[
                            { label: '1차 결제자', value: 1 },
                            { label: '2차 결제자', value: 2 },
                            { label: '3차 결제자 ', value: 3 },
                            { label: '4차 결제자', value: 4 },
                          ]}
                          value={v.eventPayLevel}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.divider} />
                </View>
              ))}
            </View>
          </ScrollView >
          <TouchableOpacity style={styles.btnWrap} onPress={() => regUser()}>
            <View style={styles.requestBtn}>
              <Text style={styles.btnText}>저장</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView >
      {/* <Footer
        navigation={props.navigation}
      /> */}
      < SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <CustomAlert
          openModal={alertOpen}
          confirm={alertConfirm}
          message={alertMessage}
          image={alertImage}
          onClose={() => setAlertOpen(false)}
        />
    </Fragment>

  );
}

export default MemberList

MemberList.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
