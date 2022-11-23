import { eventList, eventDetail } from '../repository/repository';

const eventListReq = async (orgId, eventCode, eventNm) => {
    const res = await eventList(orgId, eventCode, eventNm);
    console.log('eventList Store Log1: ' + JSON.stringify(res, null, 4));
    return res;
}

const eventDetailReq = async (eventId) => {
    const res = await eventDetail(eventId);
    console.log('eventList Store Log2: ' + JSON.stringify(res, null, 4));
    return res;
}

export { eventListReq, eventDetailReq }