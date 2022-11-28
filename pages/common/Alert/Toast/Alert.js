import React from "react";
import { Text, View, BackHandler } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";
import { AlertStyleSheet } from './AlertStyleSheet';

const Alert = (props) => {
    const { onClose, openModal, message, confirm, CusFunc, useFunc, image } = props
    const [display, setDisplay] = useState(false)
    const styles = AlertStyleSheet()

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
        <View style={{ ...styles.background, display: display ? 'flex' : 'none' }} nestedScrollEnabled={true}>
            <View style={styles.wrap}>
                <View style={styles.inner}>
                    <View style={styles.contentsWrap}>
                        <View style={styles.iconWrap}>
                            {image === 'info' ?
                                <ReactImage source={require('./assets/info.png')} style={styles.alertIcon} />
                                : image === 'check' ?
                                    <ReactImage source={require('./assets/check.png')} style={styles.alertIcon} />
                                    :
                                    <ReactImage source={require('./assets/warning.png')} style={styles.warningIcon} />
                            }
                        </View>
                        <View style={styles.textWrap}>
                            <Text style={styles.alertText}>
                                {message}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.btnWrap}>
                        {confirm ?
                            <>
                                <TouchableOpacity onPress={() => closeModal()} style={styles.cancelBtn}>
                                    <Text style={styles.cancelText}>취소</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        CusFunc()
                                        closeModal()
                                    }}
                                    style={styles.closeBtn}>
                                    <Text style={styles.confirmText}>확인</Text>
                                </TouchableOpacity>
                            </>
                            :
                            useFunc ?
                                <TouchableOpacity onPress={() => {
                                    CusFunc()
                                    closeModal()
                                }} style={styles.closeBtn}>
                                    <Text style={styles.confirmText}>확인</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => closeModal()} style={styles.closeBtn}>
                                    <Text style={styles.confirmText}>확인</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Alert;