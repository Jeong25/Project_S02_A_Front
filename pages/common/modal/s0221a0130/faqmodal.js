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
            

                <View style={styles.contentsWrap}>
                    <Text style={styles.evtName}>쉐이크쉑 행사</Text>
                    <Text style={styles.evtAdmin}>책임자 : 최현수</Text>
                    <Text style={styles.evtLocation}>행사장소 : randomaddress 1234 random 123</Text>
                    <Text style={styles.evtDate}>행사일시 : 2022-10-30 ~ 2022-11-01</Text>
                    <Text style={styles.amountWrap}>예산금액 : <Text style={styles.amount}>22 원</Text></Text>
                    <TouchableOpacity style={styles.confirmBtn} onPress={() => closeModal()}>
                        <Text style={styles.btnText}>확인</Text>
                    </TouchableOpacity>
                </View>
               
                
            </View>
        </View>
    );

}

export default FaqModal;