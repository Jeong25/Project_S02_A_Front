import React, { useEffect, useMemo, useState, Fragment } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity,Pressable } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { Dimensions } from 'react-native';
import { styleSheet } from './styleSheet';
import { deptPayInfoReq, deptInfoReq, regUserReq } from '../../DepReg/store/store';
import SwitchToggle from "react-native-switch-toggle";
import RNPickerSelect from 'react-native-picker-select';
import ToggleSwitch from '../../common/toggle/ToggleSwitch';



const MemberList = (props) => {

  const { windowHeight, windowWidth } = props
  const styles = useMemo(() => styleSheet(windowHeight, windowWidth), [windowHeight, windowWidth])

  const [deptInfo, setDeptInfo] = useState({})
  const [userInfo, setUserInfo] = useState([])
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    if (isEnabled) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  }

  const initPayLv = (eventPayLevel) => {
    let arr = userInfo.slice()
    for (let i = 0; i < arr.length; i++) {
      if (Number(userInfo[i].eventPayLevel) === Number(eventPayLevel)) {
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
  const setUser = (eventPayUserId, eventPayLevel) => {
    const payId = eventPayUserId
    const payLv = eventPayLevel
    let arr = initPayLv(payLv)
    for (let i = 0; i < arr.length; i++) {
      if (userInfo[i].eventPayUserId === payId) {
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
    console.log('확인: '+JSON.stringify(arr, null, 4))
    setUserInfo(arr)
  }

  const regUser = async () => {
    const eventId = props.route.params.eventId
    const memberId = await AsyncStorage.getItem('memberId')
    const res = await regUserReq(eventId, deptInfo, userInfo, memberId)
    if (res.data.status === 200) {
      Alert.alert('알림', '사용자 정보가 저장되었습니다.')
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
      setDeptInfo(resDept)
      setUserInfo(resUser)
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
                      <View style={styles.memberNameWrap}>
                        <Text style={styles.memberName}>{v.memberName}</Text>
                        {/* <SwitchToggle
                          onPress={toggleSwitch}
                          switchOn={isEnabled}
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
                        /> */}
                        <ToggleSwitch isOn={true} onToggle={(e) => console.log(e.target.value)}/>
                        

                      </View>
                      <Text style={styles.memberDetail}>
                        {v.hpNo}{v.eventPayRoleCd ? ` / ${v.eventPayRoleCd}` : ''}
                      </Text>
                      {/* {v.eventPayLevel === 1 ?
                        <View style={styles.selectBox}>
                          <Text style={styles.selectBoxText}>
                            1차 결제자
                          </Text>
                        </View>
                        : v.eventPayLevel === 2 ?
                          <View style={styles.selectBox}>
                            <Text style={styles.selectBoxText}>
                              2차 결제자
                            </Text>
                          </View>
                          : v.eventPayLevel === 3 ?
                            <View style={styles.selectBox}>
                              <Text style={styles.selectBoxText}>
                                3차 결제자
                              </Text>
                            </View>
                            : v.eventPayLevel === 4 ?
                              <View style={styles.selectBox}>
                                <Text style={styles.selectBoxText}>
                                  4차 결제자
                                </Text>
                              </View> : <View />} */}
                      <View style={styles.selectBox}>
                        <RNPickerSelect
                          style={styles.selectBoxText}
                          useNativeAndroidPickerStyle={false}
                          fixAndroidTouchableBug={true}
                          placeholder={{
                            label: '?차 결제자', value: ''
                          }}
                          items={[
                            { label: '1차 결제자', value: 'A' },
                            { label: '2차 결제자', value: 'B' },
                            { label: '3차 결제자 ', value: 'C' },
                            { label: '4차 결제자', value: 'D' },

                          ]}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.divider} />
                </View>
              ))}

            </View>
          </ScrollView>

          <TouchableOpacity style={styles.btnWrap} onPress={() => regUser()}>
            <View style={styles.requestBtn}>
              <Text style={styles.btnText}>저장</Text>
            </View>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
      {/* <Footer
        navigation={props.navigation}
      /> */}
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    </Fragment >

  );
}

export default MemberList

MemberList.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
