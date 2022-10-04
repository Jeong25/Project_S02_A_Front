import client from '../../common/api/client';

const retrieveCost = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    const res = await client.get(`rest/v1/s0221a0070/retrieve-cost-req?mobileMemberId=${memberId}&fromDate=${confirmFromVal}&toDate=${confirmToVal}&eventCode=${eventCode}`);
    return res;
}

export { retrieveCost };