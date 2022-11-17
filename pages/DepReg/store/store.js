import { Alert } from 'react-native';
import { deptLevel, deptInfo, deptPayInfo, reqSaveEvent, retrieveMem } from '../repository/repository';

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

const regEventReq = async (eventId, params) => {
    let inputData = params
    delete inputData?.eventHostName
    delete inputData?.eventId
    delete inputData?.eventCode
    if (eventId !== 0) {
        inputData = {
            eventNm: params.eventNm,
            eventLoc: params.eventLoc,
            eventHostId: params.eventHostId,
            eventBudgetAmount: params.eventBudgetAmount,
            eventStartDate: params.eventStartDate,
            eventEndDate: params.eventEndDate,
            eventComment: params.eventComment,
            eventStatus: params.eventStatus,
            payFlag: params.payFlag,
            eventFinalFlag: params.eventFinalFlag,
            eventPayDept: params.eventPayDept,
            defaultEventFlag: params.defaultEventFlag,
            orgId: params.orgId,
            eventRegId: params.eventRegId,
        }
    }
    const regData = {
        eventInfo: inputData,
        memberList: []
    }
    const res = await reqSaveEvent(eventId, regData);
    return res;
}

const retrieveMemReq = async (params) => {
    const res = await retrieveMem(params);
    return res.data.data;
}

export { deptLevelReq, deptInfoReq, deptPayInfoReq, regEventReq, retrieveMemReq }