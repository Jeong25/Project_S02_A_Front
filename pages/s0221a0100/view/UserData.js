import React from "react";
import { Text, View, BackHandler, SafeAreaView, Alert } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
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
        console.log(JSON.stringify(res, null, 4))
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
        props.navigation.reset({ routes: [{ name: 'Signup' }] })
      }

    useEffect(() => {
        const getData = async () => {
            const orgName = await AsyncStorage.getItem('orgName')
            const eventNm = await AsyncStorage.getItem('eventNm')
            const memberName = await AsyncStorage.getItem('memberName')
            const hpNo = await AsyncStorage.getItem('hpNo')
            console.log(orgName)
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
                                <ReactImage source={require('../assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.topTitle}>회원정보</Text>
                    </View>
                    <View style={styles.contentsWrap}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>단체명</Text>
                            <TextInput style={styles.input}>{orgName}</TextInput>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>부서명</Text>
                            <TextInput style={styles.input}>{eventNm}</TextInput>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>성명</Text>
                            <TextInput style={styles.input}>{memberName}</TextInput>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>핸드폰 번호</Text>
                            <TextInput style={styles.input}>{hpNo}</TextInput>
                        </View>

                        <View style={styles.btnWrap}>
                            <TouchableOpacity style={styles.saveBtn}>
                                <Text style={styles.saveBtnText}>저장</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.delAccountBtn} onPress={() => deletMem()}>
                                <Text style={styles.delBtnText}>회원탈퇴</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
        </Fragment >
    );
}

export default UserData;