import client from '../../common/api/client';

const eventList_id = async (orgId) => {
    const res = await client.get(`/rest/v1/s0221a2000/event-list?&orgId=${orgId}`);
    return res;
}

const eventList_idCode = async (orgId, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a2000/event-list?&eventCode=${eventCode}&orgId=${orgId}`);
    return res;
}

export { eventList_id, eventList_idCode };