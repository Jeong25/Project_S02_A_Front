import client from '../../common/api/client';

const eventList = async (orgId, eventCode) => {
    let res;
    if (!eventCode) {
        res = await client.get(`/rest/v1/s0221a2000/event-list?&orgId=${orgId}`).catch(e => {
            console.log(JSON.stringify(e, null, 4));
        });
    } else {
        res = await client.get(`/rest/v1/s0221a2000/event-list?&eventCode=${eventCode}&orgId=${orgId}`).catch(e => {
            console.log(JSON.stringify(e, null, 4));
        });
    }
    console.log(JSON.stringify(res, null, 4));
    return res;
}

export { eventList };