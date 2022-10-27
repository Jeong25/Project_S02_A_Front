import { registerEventCost } from '../repository/repository'

const registerEventCostReq = async (body, headers) => {
    console.log('Cost Store Log1: '+JSON.stringify(body, null, 4));
    const res = await registerEventCost(body, headers).catch((e) => {
        console.log('error');
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('Cost Store Log2: '+JSON.stringify(res, null, 4));
    return res;
}

export { registerEventCostReq }