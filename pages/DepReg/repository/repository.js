import client from '../../common/api/client'

const deptLevel = async (params) => {
    const res = await client.get(`/rest/v1/s021100070/dept-level?orgId=${params}`);
    return res;
}
const deptInfo = async (params) => {
    const res = await client.get(`/rest/v1/s021100070/dept-info?eventId=${params}`);
    return res;
}
const deptPayInfo = async (params) => {
    const res = await client.get(`/rest/v1/s021100070/dept-pay-info?orgId=${params.orgId}&eventId=${params.eventId}`);
    return res;
}
const reqSaveEvent = async (eventId, params) => {
    const res = await client.post(`/rest/v1/s021100070/save-event?eventId=${eventId}`, params);
    // console.log('saveEvent Log: ' + JSON.stringify(params, null, 4) + '\n결과: ' + JSON.stringify(res, null, 4));
    return res;
}
const retrieveMem = async (params) => {
    const res = await client.get(`/rest/v1/s021100050/retrieve-member-list?&orgId=${Number(params.orgId)}&memberName=${params.memberName}`);
    return res;
}

export { deptLevel, deptInfo, deptPayInfo, reqSaveEvent, retrieveMem };