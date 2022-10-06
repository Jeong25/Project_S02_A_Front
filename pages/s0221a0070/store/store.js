import { retrieveCost } from '../repository/repository'

const retrieveCostReq = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    const res = await retrieveCost(memberId, confirmFromVal, confirmToVal, eventCode)
        .catch((e) => console.log(JSON.stringify(e, null, 4)));
    console.log('CostList Store Log: '+JSON.stringify(res?.data, null, 4));
    return res;
}

export { retrieveCostReq }