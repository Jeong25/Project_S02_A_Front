import { qrInfo, qrScan } from '../repository/repository'

const qrInfoReq = async (eventId) => {
    const res = await qrInfo(Number(eventId));
    return res;
}

const qrScanReq = async (qrData, orgId, eventId) => {
    const res = await qrScan(qrData, orgId, eventId);
    // console.log(JSON.stringify(res, null, 4));
    return res;
}

export { qrInfoReq, qrScanReq }