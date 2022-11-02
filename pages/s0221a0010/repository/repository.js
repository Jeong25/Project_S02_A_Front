import client from '../../common/api/client';

const useStateCnt = async (hpNo, eventCode) => {
    try {
        const res = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const payCnt = async (hpNo, eventCode) => {
    try {
        const res = await client.get(`/rest/v1/s0221a0010/pay-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const deletMem = async (memId) => {
    try {
        const res = await client.post('/rest/v1/s021100030/delete-member', { memberId: memId });
        return res;
    } catch (e) {
        console.log(e);
    }
}

const recentEvent = async (orgId, eventCode) => {
    try {
        const res = await client.get(`/rest/v1/s0221a0010/mobile-init-recent-event?orgId=${orgId}&eventCode=${eventCode}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}
export { useStateCnt, payCnt, deletMem, recentEvent };