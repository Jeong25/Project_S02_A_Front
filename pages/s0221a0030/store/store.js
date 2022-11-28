import { signIn } from '../repository/repository';

const signInReq = async (memberName, hpNo, eventCode) => {
    const res = await signIn(memberName, hpNo, eventCode);
    // console.log('SignIn Store Log: ' + JSON.stringify(res, null, 4));
    return res;
}

export { signInReq }