import { useStateCnt, payCnt, deletMem, recentEvent } from '../repository/repository';

const useStateCntReq = async (hpNo, eventCode) => {
    const res = await useStateCnt(hpNo, eventCode);
    return res;
}

const payCntReq = async (hpNo, eventCode) => {
    const res = await payCnt(hpNo, eventCode);
    return res;
}

const deletMemReq = async (memId) => {
    const res = await deletMem(memId);
    return res;
}

const recentEventReq = async (orgId, eventCode) => {
    const res = await recentEvent(orgId, eventCode);
    console.log('recentEvent Log: '+JSON.stringify(res.data.data, null, 4))
    return res;
}

export { useStateCntReq, payCntReq, deletMemReq, recentEventReq }