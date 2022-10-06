import { eventCost, patchEventCost, deleteEventCost } from '../repository/repository'

const eventCostReq = async (eventUseId) => {
    const res = await eventCost(Number(eventUseId)).catch((e) => {
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('CostModify Store Log1: '+JSON.stringify(res, null, 4));
    return res;
}

const patchEventCostReq = async (body) => {
    const res = await patchEventCost(body).catch((e) => {
        console.log('error');
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('CostModify Store Log2: '+JSON.stringify(res, null, 4));
    return res;
}

const deleteEventCostReq = async (eventUseId) => {
    const res = await deleteEventCost(eventUseId).catch((e) => {
        console.log(e);
    });
    console.log('CostModify Store Log3: '+JSON.stringify(res, null, 4));
    return res;
}

export { eventCostReq, patchEventCostReq, deleteEventCostReq }