import client from '../../common/api/client';

const findCd = async (params) => {
    const res = await client.post(`/rest/v1/s0221a0010/find-eventCode`, params);
    return res;
}

export { findCd }