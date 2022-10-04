import client from '../../common/api/client';

const costPayList = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    const res = await client.get(`rest/v1/s0221a0090/cost-pay-list?eventPayUserId=${memberId}&fromDate=${confirmFromVal}&toDate=${confirmToVal}&eventCode=${eventCode}`)
      .catch((e) => console.log(JSON.stringify(e, null, 4)));
    console.log(console.log(JSON.stringify(res, null, 4)));
    return res;
}

export { costPayList };