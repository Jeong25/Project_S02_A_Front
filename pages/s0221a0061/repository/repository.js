import client from '../../common/api/client';

const eventCost = async (eventUseId) => {
    try {
        const res = await client.get(`rest/v1/s0221a0060/event-cost?&eventUseId=${eventUseId}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const patchEventCost = async (body) => {
    try {
        const res = await client.post(`rest/v1/s0221a0060/patch-event-cost`, body);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const deleteEventCost = async (eventUseId) => {
    try {
        const res = await client.post(`/rest/v1/s0221a0060/delete-event-cost`, [eventUseId]);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export { eventCost, patchEventCost, deleteEventCost };