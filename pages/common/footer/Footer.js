import { styleSheet } from './styleSheet';
import React, { Component, useEffect, useMemo, useState } from 'react';
import { Image as ReactImage } from 'react-native';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserTp } from '../../common/lib/getuserinfo';

const Footer = (props) => {
    
    const [memberTp, setMemberTp] = useState('')
    const styles = styleSheet()

    useEffect(() => {
        const getPermission = async () => {
            const d = await AsyncStorage.getItem('memberTp')
            if (!d) {
                const a = await setUserTp()
                setMemberTp(a)
            } else {
                setMemberTp(d)
            }
        }
        getPermission()
    }, [])
    
    return (
        <View>
            {memberTp ? <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.homeBtn} onPress={() => props.navigation.navigate('QrCode')}>
                    <View>
                        <ReactImage source={require('./assets/home.png')} style={styles.homeIcon} />
                        <Text style={styles.homeText} >홈</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.costListBtn} onPress={() => props.navigation.navigate('CostList')}>
                    <View>
                        <ReactImage source={require('./assets/receipt.png')} style={styles.costIcon} />
                        <Text style={styles.costText} >비용조회</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentListBtn} onPress={() => props.navigation.navigate('PaymentList')}>
                    <View>
                        <ReactImage source={require('./assets/stamp.png')} style={styles.paymentIcon} />
                        <Text style={styles.paymentText}>비용결제</Text>
                    </View>
                </TouchableOpacity>
                {(memberTp === 'R' || memberTp === 'C') && <TouchableOpacity style={styles.scanBtn} onPress={() => props.navigation.navigate('Qrscan')}>
                    <View>
                        <ReactImage source={require('./assets/scanIcon.png')} style={styles.scanBtnIcon} />
                        <Text style={styles.qrscanText}>QR스캔</Text>
                    </View>
                </TouchableOpacity>}
            </View> : <View />}
        </View>


    )
}

export default Footer