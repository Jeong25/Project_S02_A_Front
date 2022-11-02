import client from '../../common/api/client';

const registerEventCost = async (body, headers) => {
    try {
        const res = await client.post(`rest/v1/s0221a0060/register-event-cost`, body, headers)
        return res;
    } catch (e) {
        console.log(e);
    }
}

export { registerEventCost };