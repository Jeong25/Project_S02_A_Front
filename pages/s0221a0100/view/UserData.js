import React from "react";
import { Text, View, BackHandler,SafeAreaView, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { useState, useEffect,Fragment } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './styleSheet';

const UserData = (props) => {

    const styles = styleSheet()
    const [orgName, setOrgName] = useState('')
    const [eventNm, setEventNm] = useState('')
    const [memberName, setMemberName] = useState('')
    const [hpNo, setHpNo] = useState('')

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
                            <Text style={styles.input}>{orgName}</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>부서명</Text>
                            <Text style={styles.input}>{eventNm}</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>성명</Text>
                            <Text style={styles.input}>{memberName}</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.label}>핸드폰 번호</Text>
                            <Text style={styles.input}>{hpNo}</Text>
                        </View>

                        <View style={styles.btnWrap}>
                            <TouchableOpacity style={styles.saveBtn}>
                                <Text style={styles.saveBtnText}>저장</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.delAccountBtn}>
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