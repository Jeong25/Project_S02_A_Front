import { retrieveCost } from '../repository/repository'

const retrieveCostReq = async (memberId, confirmFromVal, confirmToVal, eventCode, useProStatus) => {
    const res = await retrieveCost(memberId, confirmFromVal, confirmToVal, eventCode, useProStatus)
        .catch((e) => console.log(JSON.stringify(e, null, 4)));
    console.log('CostList Store Log1: '+memberId,confirmFromVal,confirmToVal,eventCode,useProStatus);
    console.log('CostList Store Log2: '+JSON.stringify(res?.data, null, 4));
    return res;
}

export { retrieveCostReq }