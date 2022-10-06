import client from '../../common/api/client';

const eventCost = async (eventUseId) => {
    const res = await client.get(`rest/v1/s0221a0060/event-cost?&eventUseId=${eventUseId}`);
    return res;
}

const patchEventCost = async (body) => {
    const res = await client.post(`rest/v1/s0221a0060/patch-event-cost`, body);
    return res;
}

const deleteEventCost = async (eventUseId) => {
    const res = await client.post(`/rest/v1/s0221a0060/delete-event-cost`, [eventUseId]);
    return res;
}

export { eventCost, patchEventCost, deleteEventCost };