import { useStateCnt, payCnt, deletMem, recentEvent, retMemDetail, updateMemInfo } from '../repository/repository';

const useStateCntReq = async (hpNo, eventCode) => {
    const res = await useStateCnt(hpNo, eventCode);
    return res;
}

const payCntReq = async (hpNo, eventCode) => {
    const res = await payCnt(hpNo, eventCode);
    return res;
}

const deletMemReq = async (memId, memTp) => {
    const res = await deletMem(memId, memTp);
    return res;
}

const recentEventReq = async (orgId, eventCode) => {
    const res = await recentEvent(orgId, eventCode);
    return res;
}

const retMemDetailReq = async (params) => {
    const res = await retMemDetail(params);
    return res;
}

const updateMemInfoReq = async (params) => {
    const res = await updateMemInfo(params);
    return res;
}

export { useStateCntReq, payCntReq, deletMemReq, recentEventReq, retMemDetailReq, updateMemInfoReq }