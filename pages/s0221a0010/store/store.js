import { useStateCnt, payCnt, deletMem } from '../repository/repository';

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

export { useStateCntReq, payCntReq, deletMemReq }