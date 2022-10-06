import { eventCost, patchEventCost, deleteEventCost } from '../repository/repository'

const eventCostReq = async (eventUseId) => {
    const res = await eventCost(Number(eventUseId)).catch((e) => {
        console.log('Fail_Log: '+JSON.stringify(e, null, 4));
    });
    console.log('Success_Log: '+JSON.stringify(res, null, 4));
    return res;
}

const patchEventCostReq = async (body) => {
    const res = await patchEventCost(body).catch((e) => {
        console.log('error');
        console.log(JSON.stringify(e, null, 4));
    });
    console.log(JSON.stringify(res, null, 4));
    return res;
}

const deleteEventCostReq = async (eventUseId) => {
    const res = await deleteEventCost(eventUseId).catch((e) => {
        console.log(e);
    });
    console.log(res);
    return res;
}

export { eventCostReq, patchEventCostReq, deleteEventCostReq }