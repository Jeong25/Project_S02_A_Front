import client from '../../common/api/client';

const registerEventCost = async (body, headers) => {
    const res = await client.post(`rest/v1/s0221a0060/register-event-cost`, body, headers)
    return res;
}

export { registerEventCost };