import React from "react";
import { Text, View, BackHandler, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";
import { faqmodalStyleSheet } from './faqmodalStylesheet';

const FaqModal = (props) => {
    const { onClose, openModal } = props
    const [display, setDisplay] = useState(false)
    const styles = faqmodalStyleSheet()

    useEffect(() => {
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
                    <Text style={styles.modalTitle}>회원정보</Text>
                   <View style={styles.closeBtn}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <ReactImage source={require('../assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.contentsWrap}>
                    <Text style={styles.groupName}>단체명</Text>
                    <Text style={styles.depName}>부서명</Text>
                    <Text style={styles.userName}>성명</Text>
                    <Text style={styles.hpNumber}>핸드폰 번호</Text>
                   
                    <TouchableOpacity style={styles.delAccount} onPress={() => closeModal()}>
                        <Text style={styles.btnText}>회원탈퇴</Text>
                    </TouchableOpacity>
                </View>
               
               
                
            </View>
        </View>
    );

}

export default FaqModal;