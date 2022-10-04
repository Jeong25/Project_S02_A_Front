import { signUp } from '../repository/repository';

const signUpReq = async (memberName, hpNo, eventCode) => {
    const res = await signUp(memberName, hpNo, eventCode).catch((error) => {
        console.log('error!!');
        console.log(JSON.stringify(error.response, null, 4));
    });
    console.log(JSON.stringify(res, null, 4));
    return res;
}

export { signUpReq }