import client from '../../common/api/client';

const signIn = async (memberName, hpNo, eventCode) => {
    try {
        const res = await client.get(`/rest/v1/s0221a0030/sign-up?memberName=${memberName}&hpNo=${hpNo}&eventCode=${eventCode}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export { signIn };