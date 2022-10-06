import { eventList } from '../repository/repository';

const eventListReq = async (orgId, eventCode) => {
    const res = await eventList(orgId, eventCode).catch(e => {
        console.log(JSON.stringify(e, null, 4));
    });
    console.log('eventList Store Log: '+JSON.stringify(res, null, 4));
    return res;
}

export { eventListReq }