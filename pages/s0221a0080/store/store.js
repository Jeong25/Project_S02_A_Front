import { costReqDetail, processingCost } from '../repository/repository';

const costReqDetailReq = async (eventUseId) => {
    const res = await costReqDetail(eventUseId);
    console.log('Payment Store Log1: '+JSON.stringify(res?.data, null, 4));
    return res;
}

const processingCostReq = async (body) => {
    const res = await processingCost(body);
    console.log('Payment Store Log2: '+JSON.stringify(res?.data, null, 4));
    return res;
}

export { costReqDetailReq, processingCostReq }