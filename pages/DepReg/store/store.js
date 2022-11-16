import { deptLevel, regEvent } from '../repository/repository';

const deptLevelReq = async (params) => {
    const res = await deptLevel(params);
    return res.data.data;
}

const regEventReq = async (params) => {
    const res = await regEvent(params);
    return res;
}

export { deptLevelReq, regEventReq }