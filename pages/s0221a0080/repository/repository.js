import client from '../../common/api/client';

const costReqDetail = async (eventUseId) => {
    try {
        const res = await client.get(`rest/v1/s0221a0060/event-cost?&eventUseId=${eventUseId}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const processingCost = async (body) => {
    try {
        const res = await client.post(`/rest/v1/s0221a0080/processing-cost-req`, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export { costReqDetail, processingCost };