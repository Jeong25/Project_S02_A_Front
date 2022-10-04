import client from '../../common/api/client';

const signUp = async (memberName, hpNo, eventCode) => {
    const res = await client
        .get(`/rest/v1/s0221a0030/sign-up?memberName=${memberName}&hpNo=${hpNo}&eventCode=${eventCode}`).catch((error) => {
            console.log('error!!');
            console.log(JSON.stringify(error.response, null, 4));
        });
    console.log(JSON.stringify(res, null, 4));
    return res;
}

export { signUp };