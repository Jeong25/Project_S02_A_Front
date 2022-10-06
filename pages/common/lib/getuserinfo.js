import client from '../../common/api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserTp = async () => {
    const localHpNo = await AsyncStorage.getItem('hpNo')
    const localEventCode = await AsyncStorage.getItem('eventCode')
    const result = await client.get(`/rest/v1/s0221a0010/user-info?eventCode=${localEventCode}&hpNo=${localHpNo}`)
    if (result?.data?.data.length > 0) {

        const { eventCode, orgId, memberTp, orgEventName, mobileId, memberId, eventNm, eventRole, eventId, defaultEventId } = result?.data?.data[0]

        await AsyncStorage.setItem('eventCode', eventCode  || '')
        await AsyncStorage.setItem('orgEventName', orgEventName || '')
        await AsyncStorage.setItem('memberTp', memberTp || '')
        await AsyncStorage.setItem('mobileId', mobileId || '')
        await AsyncStorage.setItem('orgId', JSON.stringify(orgId) || '')
        await AsyncStorage.setItem('memberId', JSON.stringify(memberId) || '')
        await AsyncStorage.setItem('eventNm', eventNm || '')
        await AsyncStorage.setItem('eventRole', eventRole || '')
        await AsyncStorage.setItem('eventId', JSON.stringify(eventId) || '')
        await AsyncStorage.setItem('defaultEventId', JSON.stringify(defaultEventId) || '')

        return { ...result?.data?.data[0] }
    }
}

export {
    setUserTp,
}