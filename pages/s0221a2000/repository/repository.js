import client from '../../common/api/client';

const eventList = async (orgId, eventCode) => {
    const res = await client.get(`/rest/v1/s0221a2000/event-list?&eventCode=${eventCode}&orgId=${orgId}`);
    return res;
}

export { eventList };