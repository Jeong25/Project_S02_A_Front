import { findCd } from '../repository/repository';

const findCdReq = async (params) => {
    const res = await findCd(params);
    console.log('signUp Store Log2: ' + JSON.stringify(res, null, 4));
    return res
}

export { findCdReq }