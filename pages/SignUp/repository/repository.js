import client from '../../common/api/client';

const regOrg = async (params) => {
    try {
        const res = await client.get(`/rest/v1/s021100020/org`, params);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const checkEmail = async (email) => {
    try {
        const res = await client.get(`/rest/v1/s021100020/dup-check-email?email=${email}`);
        return res
    } catch(e) {
        console.log(e)
    }
}

const checkOrg = async (orgName, ceoName) => {
    try {
        const res = await client.get(`/rest/v1/s021100020/dup-check-org?orgName=${orgName}&ceoName=${ceoName}`);
        return res
    } catch(e) {
        console.log(e)
    }
}

export { regOrg, checkEmail, checkOrg }