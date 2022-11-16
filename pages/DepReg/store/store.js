import { deptLevel, deptInfo, deptPayInfo, regEvent, retrieveMem } from '../repository/repository';

const deptLevelReq = async (params) => {
    const res = await deptLevel(params);
    return res.data.data;
}

const deptInfoReq = async (params) => {
    const res = await deptInfo(params);
    return res.data.data;
}

const deptPayInfoReq = async (params) => {
    const res = await deptPayInfo(params);
    return res.data.data;
}

const regEventReq = async (params) => {
    const res = await regEvent(params);
    return res;
}

const retrieveMemReq = async (params) => {
    const res = await retrieveMem(params);
    return res.data.data;
}

export { deptLevelReq, deptInfoReq, deptPayInfoReq, regEventReq, retrieveMemReq }