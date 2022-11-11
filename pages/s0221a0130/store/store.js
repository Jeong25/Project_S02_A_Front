import { findCd } from '../repository/repository';

const findCdReq = async (params) => {
    const res = await findCd(params).catch(e => {
        console.log(e);
    });
    console.log('signUp Store Log2: '+JSON.stringify(res, null, 4));
    return res.data.massage
}

export { findCdReq }