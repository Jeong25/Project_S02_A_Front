import { costPayList } from '../repository/repository';

const costPayListReq = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    const res = await costPayList(memberId, confirmFromVal, confirmToVal, eventCode);
    console.log('PaymentList Store Log1: ' + memberId, confirmFromVal, confirmToVal, eventCode);
    console.log('PaymentList Store Log2: ' + JSON.stringify(res, null, 4));
    return res;
}

export { costPayListReq }