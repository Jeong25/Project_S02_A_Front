import client from '../../common/api/client';

const costPayList = async (memberId, confirmFromVal, confirmToVal, eventCode) => {
    try {
        const res = await client.get(`rest/v1/s0221a0090/cost-pay-list?eventPayUserId=${memberId}&fromDate=${confirmFromVal}&toDate=${confirmToVal}&eventCode=${eventCode}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export { costPayList };