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
    const [info, setInfo] = useState({})
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
        setInfo({memberId: memberId, mobileId: mobileId})
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
        <View style={{ ...styles.wrap, display: display ? 'flex' : 'none' }} nestedScrollEnabled={true}>
            <View style={styles.inner}>
                    <View style={styles.closeBtn}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <Text style={styles.closeText}>확인</Text>
                        </TouchableOpacity>
                    </View>
                <View style={styles.modalInner}>
                    
                 
                </View>
            </View>
        </View>
    );

}

export default QrModal;