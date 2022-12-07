import { regOrg, checkEmail, checkOrg } from '../repository/repository';

const regOrgReq = async (params) => {
    const res = await regOrg(params);
    console.log('signUp Store Log1: ' + JSON.stringify(params, null, 4) + '\n결과: ' + JSON.stringify(res, null, 4));
    return res;
}

const checkEmailReq = async (email, orgName) => {
    const res = await checkEmail(email, orgName);
    console.log('signUp Store Log2: ' + JSON.stringify(res, null, 4));
    return res.data.data;
}

const checkOrgReq = async (orgName, ceoName) => {
    const res = await checkOrg(orgName, ceoName);
    console.log('signUp Store Log3: ' + JSON.stringify(res, null, 4));
    return res.data.data;
}

export { regOrgReq, checkEmailReq, checkOrgReq }