import React from "react";
import { Text, View, BackHandler, SafeAreaView, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect, Fragment } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './styleSheet';
import { deletMemReq } from '../../s0221a0010/store/store';

const UserData = (props) => {

    const styles = styleSheet()
    const [orgName, setOrgName] = useState('')
    const [eventNm, setEventNm] = useState('')
    const [memberName, setMemberName] = useState('')
    const [hpNo, setHpNo] = useState('')

    const deletMem = async () => {
        const memId = await AsyncStorage.getItem('memberId')
        const res = await deletMemReq(Number(memId))
        Alert.alert('알림', '회원 탈퇴가 완료되었습니다.')
        logOut();
    }

    const logOut = async () => {
        await AsyncStorage.setItem('eventCode', '')
        await AsyncStorage.setItem('orgEventName', '')
        await AsyncStorage.setItem('memberTp', '')
        await AsyncStorage.setItem('mobileId', '')
        await AsyncStorage.setItem('orgName', '')
        await AsyncStorage.setItem('orgId', '')
        await AsyncStorage.setItem('memberId', '')
        await AsyncStorage.setItem('eventNm', '')
        await AsyncStorage.setItem('eventRole', '')
        await AsyncStorage.setItem('eventId', '')
        await AsyncStorage.setItem('defaultEventId', '')
        await AsyncStorage.setItem('useRegFlag', '')
        props.navigation.reset({ routes: [{ name: 'Signin' }] })
    }

    useEffect(() => {
        const getData = async () => {
            const orgName = await AsyncStorage.getItem('orgName')
            const eventNm = await AsyncStorage.getItem('eventNm')
            const memberName = await AsyncStorage.getItem('memberName')
            const hpNo = await AsyncStorage.getItem('hpNo')
            setOrgName(orgName)
            setEventNm(eventNm)
            setMemberName(memberName)
            setHpNo(hpNo)
        }
        getData()
    })

    return (
        <Fragment >
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f15a24' }}>
                <View style={styles.wrap}>
                    <View style={styles.topMenu}>
                        <View style={styles.backBtn}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <ReactImage source={require('../../common/img/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.topTitle}>회원정보</Text>
                    </View>
                    <View style={styles.contentsWrap}>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>단체명</Text>
                            <Text style={styles.userInfo}>{orgName}</Text>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>부서명</Text>
                            <Text style={styles.userInfo}>{eventNm}</Text>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>성명</Text>
                            <Text style={styles.userInfo}>{memberName}</Text>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>핸드폰 번호</Text>
                            <Text style={styles.userInfo}>{hpNo}</Text>
                        </View>

                    </View>
                    <View style={styles.btnWrap}>

                        <TouchableOpacity style={styles.delAccountBtn} onPress={() => deletMem()}>
                            <Text style={styles.delBtnText}>회원탈퇴</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
        </Fragment >
    );
}

export default UserData;