import client from '../../common/api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserTp = async () => {
    const localHpNo = await AsyncStorage.getItem('hpNo')
    const localEventCode = await AsyncStorage.getItem('eventCode')
    const result = await client.get(`/rest/v1/s0221a0010/user-info?eventCode=${localEventCode}&hpNo=${localHpNo}`)
    if (result?.data?.data.length > 0) {

        const { eventCode, orgId, orgName, memberTp, orgEventName, mobileId, memberId, eventNm, eventRole, eventId, defaultEventId, useRegFlag, eventHostId } = result?.data?.data[0]
        // console.log('getInfoLog: '+JSON.stringify(result, null, 4))

        await AsyncStorage.setItem('eventCode', eventCode  || '')
        await AsyncStorage.setItem('orgEventName', orgEventName || '')
        await AsyncStorage.setItem('memberTp', memberTp || '')
        await AsyncStorage.setItem('mobileId', mobileId || '')
        await AsyncStorage.setItem('orgName', orgName || '')
        await AsyncStorage.setItem('orgId', JSON.stringify(orgId) || '')
        await AsyncStorage.setItem('memberId', JSON.stringify(memberId) || '')
        await AsyncStorage.setItem('eventNm', eventNm || '')
        await AsyncStorage.setItem('eventRole', eventRole || '')
        await AsyncStorage.setItem('eventId', JSON.stringify(eventId) || '')
        await AsyncStorage.setItem('defaultEventId', JSON.stringify(defaultEventId) || '')
        await AsyncStorage.setItem('useRegFlag', JSON.stringify(useRegFlag) || '')
        await AsyncStorage.setItem('eventHostId', JSON.stringify(eventHostId) || '')

        return { ...result?.data?.data[0] }
    }
}

export {
    setUserTp,
}