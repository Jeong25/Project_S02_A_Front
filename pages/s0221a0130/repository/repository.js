import client from '../../common/api/client';

const findCd = async (params) => {
    try {
        const res = await client.post(`/rest/v1/s0221a0010/find-eventCode`, params);
        return res
    } catch(e) {
        console.log(e)
    }
}

export { findCd }