import { registerEventCost } from '../repository/repository'

const registerEventCostReq = async (body, headers) => {
    const res = await registerEventCost(body, headers).catch((e) => {
        console.log('error');
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('Cost Store Log: '+JSON.stringify(res, null, 4));
    return res;
}

export { registerEventCostReq }