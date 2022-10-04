import React from "react";
import { Text, View, BackHandler, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { modalStyleSheet } from './modalStylesheet';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";

const TempoModal = (props) => {
    const { onClick, onClose, option, openModal } = props
    const [display, setDisplay] = useState(false)
    const styles = modalStyleSheet()

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
                    <Text style={styles.modalTitle}>FAQ</Text>
                   <View style={styles.closeBtn}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <ReactImage source={require('./assets/backBtnIcon-w.png')} style={styles.backBtnIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
               
                
            </View>
        </View>
    );

}

export default TempoModal;