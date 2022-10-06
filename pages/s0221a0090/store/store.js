import { costPayList } from '../repository/repository';

const costPayListReq = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    const res = await costPayList(memberId, confirmFromVal, confirmToVal, eventCode)
        .catch((e) => console.log(JSON.stringify(e, null, 4)));
    console.log('PaymentList Store Log: ' + JSON.stringify(res, null, 4));
    return res;
}

export { costPayListReq }