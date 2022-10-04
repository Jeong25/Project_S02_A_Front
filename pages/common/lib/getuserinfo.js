import client from '../../common/api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserTp = async () => {
    const localHpNo = await AsyncStorage.getItem('hpNo')
    const localEventCode = await AsyncStorage.getItem('eventCode')
    const result1 = await client.get(`/rest/v1/s0221a0010/user-info?eventCode=${localEventCode}&hpNo=${localHpNo}`)
    if (result1?.data?.data.length > 0) {
        const memberTp = result1?.data?.data[0].memberTp
        await AsyncStorage.setItem('memberTp', memberTp || '')
        return { ...result1?.data?.data[0] }
    }
}

export {
    setUserTp,
}