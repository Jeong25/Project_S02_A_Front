import client from '../../common/api/client';

const regOrg = async (params) => {
    const res = await client.get(`/rest/v1/s021100020/org`, params);
    return res;
}

const checkEmail = async (email) => {
    const res = await client.get(`/rest/v1/s021100020/dup-check-email?email=${email}`);
    return res;
}

const checkOrg = async (orgName, ceoName) => {
    const res = await client.get(`/rest/v1/s021100020/dup-check-org?orgName=${orgName}&ceoName=${ceoName}`);
    return res;
}

export { regOrg, checkEmail, checkOrg }