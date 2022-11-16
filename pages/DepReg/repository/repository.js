import client from '../../common/api/client'

const deptLevel = async (params) => {
    const res = await client.get(`/rest/v1/s021100070/dept-level?orgId=${params}`);
    return res;
}
const regEvent = async (params) => {
    const res = await client.post(`/rest/v1/s021100070/reg-event`, params);
    return res;
}

export { deptLevel, regEvent };