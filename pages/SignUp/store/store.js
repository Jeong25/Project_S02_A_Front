import { regOrg, checkEmail, checkOrg } from '../repository/repository';

const regOrgReq = async (params) => {
    const res = await regOrg(params).catch(e => {
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('signUp Store Log1: '+JSON.stringify(res, null, 4));
    return res;
}

const checkEmailReq = async (email) => {
    const res = await checkEmail(email).catch(e => {
        console.log(e);
    });
    console.log('signUp Store Log2: '+JSON.stringify(res, null, 4));
    return res.data.data
}

const checkOrgReq = async (orgName, ceoName) => {
    const res = await checkOrg(orgName, ceoName).catch(e => {
        console.log(e);
    });
    console.log('signUp Store Log3: '+JSON.stringify(res, null, 4));
    return res.data.data
}
export { regOrgReq, checkEmailReq, checkOrgReq }