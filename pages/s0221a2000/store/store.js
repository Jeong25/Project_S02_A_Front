import { eventList, eventDetail } from '../repository/repository';

const eventListReq = async (orgId, eventCode) => {
    const res = await eventList(orgId, eventCode).catch(e => {
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('eventList Store Log1: '+JSON.stringify(res, null, 4));
    return res;
}

const eventDetailReq = async (eventId) => {
    const res = await eventDetail(eventId).catch(e => {
        console.log(e);
    });
    console.log('eventList Store Log2: '+JSON.stringify(res, null, 4));
    return res
}

export { eventListReq, eventDetailReq }