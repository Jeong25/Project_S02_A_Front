import client from '../../common/api/client';

const useStateCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

const payCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/pay-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

const deletMem = async (memId, memTp) => {
    const res = await client.post('/rest/v1/s021100030/delete-member', { loginId: memId, memberId: memId, memberTp: memTp });
    return res;
}

const recentEvent = async (orgId, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/mobile-init-recent-event?orgId=${orgId}&eventCode=${eventCode}`);
    return res;
}

const retMemDetail = async (memId) => {
    const res = await client.get(`/rest/v1/s021100030/retrieve-member-detail?memberId=${memId}`);
    return res;
}

const updateMemInfo = async (params) => {
    const res = await client.post(`/rest/v1/s021100040/update-member-info`, params);
    return res;
}

export { useStateCnt, payCnt, deletMem, recentEvent, retMemDetail, updateMemInfo };