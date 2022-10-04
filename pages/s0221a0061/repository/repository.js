import client from '../../common/api/client';

const patchEventCost = async (body) => {
    const res = await client.post(`rest/v1/s0221a0060/patch-event-cost`, body).catch((e) => {
        console.log('error')
        console.log(JSON.stringify(e, null, 4))
    })
    console.log(JSON.stringify(res, null, 4))
    return res;
}

const deleteEventCost = async (eventUseId) => {
    const res = await client.post(`/rest/v1/s0221a0060/delete-event-cost`, [eventUseId]).catch((e) => {
        console.log(e)
    });
    console.log(res);
    return res;
}

export { patchEventCost, deleteEventCost };