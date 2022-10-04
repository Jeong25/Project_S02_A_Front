import client from '../../common/api/client';

const useStateCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

const payCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/pay-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

export { useStateCnt, payCnt };