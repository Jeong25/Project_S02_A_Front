import client from '../../common/api/client';

const costReqDetail = async (eventUseId) => {
    const res = await client.get(`rest/v1/s0221a0060/event-cost?&eventUseId=${eventUseId}`);
    return res;
}

const processingCost = async (body) => {
    const res = await client.post(`/rest/v1/s0221a0080/processing-cost-req`, body);
    return res;
}

export { costReqDetail, processingCost };