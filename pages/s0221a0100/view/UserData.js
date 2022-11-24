import React from "react";
import { Text, View, TextInput, BackHandler, SafeAreaView, Alert, ScrollView } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect, Fragment } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './styleSheet';
import { deletMemReq, retMemDetailReq, updateMemInfoReq } from '../../s0221a0010/store/store';
import CustomAlert from '../../common/Alert/Toast/Alert';

const UserData = (props) => {

    const styles = styleSheet()
    const [orgName, setOrgName] = useState('')
    const [eventNm, setEventNm] = useState('')
    const [memberName, setMemberName] = useState('')
    const [hpNo, setHpNo] = useState('')
    const [params, setParams] = useState({})

    const [alertOpen, setAlertOpen] = useState(false)
    const [alertOpen_, setAlertOpen_] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertConfirm, setAlertConfirm] = useState(false)
    const [alertImage, setAlertImage] = useState('info')
    const [alertUseFunc, setAlertUseFunc] = useState(false)

    const cusAlert = async (message, image, use) => {
        setAlertMessage(message)
        setAlertImage(image)
        setAlertConfirm(false)
        setAlertUseFunc(use)
        setAlertOpen(true)
        return true
    }

    const cusAlert_ = async (message, image, use) => {
        setAlertMessage(message)
        setAlertImage(image)
        setAlertConfirm(false)
        setAlertUseFunc(use)
        setAlertOpen_(true)
        return true
    }

    const updateMem = async () => {
        if (params.pwd === '' || params.pwdCheck === '' || params.pwd !== params.pwdCheck) {
            cusAlert('비밀번호를 확인해주세요.', '', false)
        } else {
            const res = await updateMemInfoReq(params);
            if (res.data.status === 200) {
                cusAlert('저장되었습니다.', 'check', true)
            } else {
                cusAlert('오류가 발생했습니다.', '', false)
            }
        }
    }

    const deletMem = async () => {
        const memId = await AsyncStorage.getItem('memberId')
        const memTp = await AsyncStorage.getItem('memberTp')
        Alert.alert('알림', '부서에서 탈퇴하시겠습니까?', [
            {
                text: '확인', onPress: async () => {
                    try {
                        const res = await deletMemReq(Number(memId), memTp)
                        if (res.data.status === 200) {
                            cusAlert_('회원 탈퇴가 완료되었습니다.', 'check', true)
                        } else {
                            cusAlert_('오류가 발생했습니다.', '', false)
                        }
                    } catch (e) {
                        console.log(e)
                        cusAlert_('오류가 발생했습니다.', '', false)
                    }
                }
            },
            { text: '취소', onPress: () => { } }
        ])
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
        const getMemInfo = async () => {
            const memId = await AsyncStorage.getItem('memberId')
            const res = await retMemDetailReq(memId)
            setParams({
                accountNo: res.data.data.accountNo,
                address: res.data.data.address,
                bankNm: res.data.data.bankNm,
                birth: res.data.data.birth,
                detailAddress: res.data.data.detailAddress,
                email: res.data.data.email,
                firstHpNo: res.data.data.hpNo.split('-')[0],
                lastHpNo: res.data.data.hpNo.split('-')[2],
                loginId: res.data.data.memberId,
                memberId: res.data.data.memberId,
                memberName: res.data.data.memberName,
                middleHpNo: res.data.data.hpNo.split('-')[1],
                pwd: '',
                pwdCheck: '',
                zipCode: res.data.data.zipCode
            })
        }
        getData()
        getMemInfo()
    }, [])

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
                    <ScrollView
                        style={styles.contentsWrap}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        enableOnAndroid={true}
                        scrollEnabled={true}
                        scrollToOverflowEnabled={true}
                        enableAutomaticScroll={true}
                        keyboardShouldPersistTaps='always'
                        nestedScrollEnabled={true}
                    >

                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>단체명</Text>
                            <TextInput editable={false} style={styles.userInfo}>{orgName}</TextInput>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>부서명</Text>
                            <TextInput editable={false} style={styles.userInfo}>{eventNm}</TextInput>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>성명</Text>
                            <TextInput editable={false} style={styles.userInfo}>{params.memberName}</TextInput>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>핸드폰 번호</Text>
                            <TextInput editable={false} style={styles.userInfo}>{hpNo}</TextInput>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.label}>이메일</Text>
                            <TextInput style={styles.userInfo}
                                onChange={(e) => setParams({ ...params, email: e.nativeEvent.text })}
                                value={params.email}
                            ></TextInput>
                        </View>
                        <View style={styles.layer}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.label}>은행</Text>
                                <TextInput style={styles.userInfo}
                                    onChange={(e) => setParams({ ...params, bankNm: e.nativeEvent.text })}
                                    value={params.bankNm}
                                ></TextInput>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.label}>계좌번호</Text>
                                <TextInput style={styles.userInfo}
                                    keyboardType="number-pad"
                                    onChange={(e) => setParams({ ...params, accountNo: e.nativeEvent.text })}
                                    value={params.accountNo}
                                ></TextInput>
                            </View>
                        </View>
                        <View style={styles.layer}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.label}>비밀번호</Text>
                                <TextInput style={styles.userInfo}
                                    onChange={(e) => setParams({ ...params, pwd: e.nativeEvent.text })}
                                    value={params.pwd}
                                    secureTextEntry={true}
                                ></TextInput>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.label}>비밀번호 확인</Text>
                                <TextInput style={styles.userInfo}
                                    onChange={(e) => setParams({ ...params, pwdCheck: e.nativeEvent.text })}
                                    value={params.pwdCheck}
                                    secureTextEntry={true}
                                ></TextInput>
                            </View>
                        </View>

                        <View style={styles.btnWrap}>

                            <TouchableOpacity style={styles.saveBtn} onPress={() => updateMem()}>
                                <Text style={styles.saveBtnText}>저장</Text>
                            </TouchableOpacity>

                            <Text style={styles.delBtn} onPress={() => deletMem()}>부서 나가기</Text>
                        </View>

                    </ScrollView>
                </View>
                
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
            <CustomAlert
                    openModal={alertOpen}
                    confirm={alertConfirm}
                    message={alertMessage}
                    image={alertImage}
                    CusFunc={() => props.navigation.replace('UserData')}
                    useFunc={alertUseFunc}
                    onClose={() => setAlertOpen(false)}
                />
                <CustomAlert
                    openModal={alertOpen_}
                    confirm={alertConfirm}
                    message={alertMessage}
                    image={alertImage}
                    CusFunc={() => logOut()}
                    useFunc={alertUseFunc}
                    onClose={() => setAlertOpen(false)}
                />
        </Fragment >
    );
}

export default UserData;