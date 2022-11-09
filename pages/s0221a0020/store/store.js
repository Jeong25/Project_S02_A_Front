import { qrInfo, qrScan } from '../repository/repository'

const qrInfoReq = async (eventId) => {
    const res = await qrInfo(Number(eventId));
    return res;
}

const qrScanReq = async (memberId, mobileId, orgId, eventId) => {
    const params = {
        eventId: eventId,
        memberId: memberId,
        mobileId: mobileId,
        orgId: orgId
    }
    const res = await qrScan(params);
    console.log('QrScan Log: Input. '+JSON.stringify(params, null, 4)+'\nresult. '+JSON.stringify(res, null, 4));
    return res;
}

export { qrInfoReq, qrScanReq }