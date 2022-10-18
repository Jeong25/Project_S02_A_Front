import client from '../../common/api/client';

const useStateCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

const payCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/pay-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

const deletMem = async (memId) => {
    const res = await client.post('/rest/v1/s021100030/delete-member', {memberId: memId});
    return res
}
export { useStateCnt, payCnt, deletMem };