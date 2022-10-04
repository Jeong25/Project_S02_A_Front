import client from '../../common/api/client';

const registerEventCost = async (body, headers) => {
    const res = await client.post(`rest/v1/s0221a0060/register-event-cost`, body, headers).catch((e) => {
        console.log('error');
        console.log(JSON.stringify(e, null, 4));
    });
    console.log(JSON.stringify(res, null, 4));
    return res;
}

export { registerEventCost };