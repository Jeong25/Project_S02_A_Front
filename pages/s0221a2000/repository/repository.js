import client from '../../common/api/client';

const eventList = async (orgId, eventCode, eventNm) => {
    const res = await client.get(`/rest/v1/s0221a2000/event-list?&eventCode=${eventCode}&orgId=${orgId}&eventNm=${eventNm}`);
    return res;
}

const eventDetail = async (eventId) => {
    const res = await client.get(`/rest/v1/s0221a2000/event-detail?&eventId=${eventId}`);
    return res;
}

export { eventList, eventDetail };