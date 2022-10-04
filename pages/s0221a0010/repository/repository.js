import client from '../../common/api/client';

const ustStateCnt = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/use-state-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

const payCntReq = async (hpNo, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a0010/pay-cnt?eventCode=${eventCode}&hpNo=${hpNo}`);
    return res;
}

export { ustStateCnt, payCntReq };