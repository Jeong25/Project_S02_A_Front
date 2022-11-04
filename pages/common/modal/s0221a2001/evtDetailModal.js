import React, { useCallback } from "react";
import { Text, View, BackHandler, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect } from "react";
import { styleSheet } from './styleSheet';
import { eventDetailReq } from '../../../s0221a2000/store/store'

const EvtDetailModal = (props) => {
    const { onClose, openModal, eventId } = props
    const [display, setDisplay] = useState(false)
    const [data, setData] = useState({});
    const styles = styleSheet()

    useEffect(() => {
        setDisplay(openModal)
        getData()
        BackHandler.addEventListener('hardwareBackPress', close)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', close)
        }
    }, [openModal])

    const getData = useCallback(async () => {
        const res = await eventDetailReq(eventId)
        console.log('확인LOG: ' + JSON.stringify(res, null, 4))
        setData(res.data.data)
    })

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
                    <Text style={styles.evtName}>{data.eventNm}</Text>
                    <Text style={styles.evtAdmin}>책임자 : {data.memberName}</Text>
                    <Text style={styles.evtLocation}>행사장소 : {data.eventLoc}</Text>
                    <Text style={styles.evtDate}>행사일시 : {`${data.eventStartDate?.split(' ')[0]} ~ ${data.eventEndDate?.split(' ')[0]}`}</Text>
                    {/* <View style={styles.amountWrap}>
                        <Text style={styles.amount}>예산금액 : </Text>
                        <Text style={styles.amount}>100,000,000 원</Text>
                    </View> */}
                    <TouchableOpacity style={styles.confirmBtn} onPress={() => closeModal()}>
                        <Text style={styles.btnText}>확인</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );

}

export default EvtDetailModal;