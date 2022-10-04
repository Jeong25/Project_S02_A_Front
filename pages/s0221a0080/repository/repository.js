import client from '../../common/api/client';

const costReqDetail = async (eventUseId) => {
    const res = await client.get(`/rest/v1/s0221a0080/cost-req-detail?eventUseId=${eventUseId}`).catch((e) => {
        console.log(e);
    });
    return res;
}

const processingCostReq = async (body) => {
    const res = await client.post(`/rest/v1/s0221a0080/processing-cost-req`, body).catch((e) => {
        console.log(e);
    });
    console.log(JSON.stringify(res?.data, null, 4));
    return res;
}

export { costReqDetail, processingCostReq };