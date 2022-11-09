import React from "react";
import { Text, View, BackHandler, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCode from "react-native-qrcode-svg";
import { QrModalStyleSheet } from './QrModalStylesheet';

const QrModal = (props) => {
    const { onClose, openModal } = props
    const [display, setDisplay] = useState(false)
    const [memberName, setMemberName] = useState('')
    const [eventNm, setEventNm] = useState('')
    const [eventRole, setEventRole] = useState('')
    const [info, setInfo] = useState('No')
    const styles = QrModalStyleSheet()

    const getInfo = async () => {
        const memberName = await AsyncStorage.getItem('memberName')
        const eventNm = await AsyncStorage.getItem('eventNm')
        const eventRole = await AsyncStorage.getItem('eventRole')
        const mobileId = await AsyncStorage.getItem('mobileId')
        const memberId = await AsyncStorage.getItem('memberId')
        setMemberName(memberName)
        setEventNm(eventNm)
        setEventRole(eventRole)
        setInfo(`${memberId}/${mobileId}`)
    }

    useEffect(() => {
        getInfo()
        setDisplay(openModal)
        BackHandler.addEventListener('hardwareBackPress', close)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', close)
        }
    }, [openModal])

    const close = () => {
        if (openModal) {
            onClose()
            return true
        }
        return false
    }

    const closeModal = () => {
        if (typeof (onClose) === 'function') {
            if (onClose) {
                onClose()
            }
        }
        setDisplay(false)
    }

    return (
        <View style={{ ...styles.modalBox, display: display ? 'flex' : 'none' }} nestedScrollEnabled={true}>
            <View style={styles.box}>
                <View style={styles.titleSection}>
                    <Text style={styles.modalTitle}>QR코드</Text>
                    <View style={styles.closeBtn}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <ReactImage source={require('../assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.modalInner}>
                    <View style={styles.qrcodeWrap}>
                        <View style={styles.qrImg}>
                            <QRCode value={info} size={210} quietZone ={20} backgroundColor ='transparent'/>
                        </View>
                    </View>
                    <View style={styles.divider}></View>
                    <View style={styles.textWrap}>
                        <Text style={styles.memberName}>{memberName}</Text>
                        <Text style={styles.memberPosition}>{`${eventNm} / ${eventRole ? eventRole : '일반회원'}`}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

}

export default QrModal;