import client from '../../common/api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserTp = async () => {
    const localHpNo = await AsyncStorage.getItem('hpNo')
    const localEventCode = await AsyncStorage.getItem('eventCode')
    const result = await client.get(`/rest/v1/s0221a0010/user-info?eventCode=${localEventCode}&hpNo=${localHpNo}`)
    if (result?.data?.data.length > 0) {
        const memberTp = result?.data?.data[0].memberTp
        const eventNm = result?.data?.data[0].eventNm
        const eventRole = result?.data?.data[0].eventRole
        await AsyncStorage.setItem('memberTp', memberTp || '')
        await AsyncStorage.setItem('eventNm', eventNm || '')
        await AsyncStorage.setItem('eventRole', eventRole || '')
        return { ...result?.data?.data[0] }
    }
}

export {
    setUserTp,
}