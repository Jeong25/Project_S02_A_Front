import client from '../../common/api/client';

const retrieveCostReq = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    const res = await client.get(`rest/v1/s0221a0070/retrieve-cost-req?mobileMemberId=${memberId}&fromDate=${confirmFromVal}&toDate=${confirmToVal}&eventCode=${eventCode}`)
        .catch((e) => console.log(JSON.stringify(e, null, 4)));
    console.log(JSON.stringify(res?.data, null, 4));
    return res;
}

export { retrieveCostReq };