import React from "react";
import { Text, View, BackHandler} from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styleSheet } from './styleSheet';

const CustomAlert = (props) => {
    const { onClose, openModal } = props
    const [display, setDisplay] = useState(false)
    const styles = styleSheet()

  
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
                            <ReactImage source={require('./assets/info.png')} style={styles.alertIcon} />
                        </View>
                        <View style={styles.textWrap}>
                            <Text style={styles.alertText}>
                                모든 항목을 입력해야합니다.{"\n"}
                              
                            </Text>

                        </View>
                    </View>
                    <View style={styles.btnWrap}>
                        <TouchableOpacity onPress={() => closeModal()} style={styles.cancelBtn}>
                            <Text style={styles.cancelText}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => closeModal()} style={styles.closeBtn}>
                            <Text style={styles.closeText}>확인</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );

}

export default CustomAlert;