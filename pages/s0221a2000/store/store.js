import { eventList_id, eventList_idCode } from '../repository/repository';

const eventListReq = async (orgId, eventCode) => {
    let res;
    if (!eventCode) {
        res = await eventList_id(orgId).catch(e => {
            console.log(JSON.stringify(e, null, 4));
        });
    } else {
        res = await eventList_idCode(orgId, eventCode).catch(e => {
            console.log(JSON.stringify(e, null, 4));
        });
    }
    console.log(JSON.stringify(res, null, 4));
    return res;
}

export { eventListReq }