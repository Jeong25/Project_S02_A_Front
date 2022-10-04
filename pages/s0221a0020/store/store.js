import { qrScan } from '../repository/repository'

const qrScanReq = async (qrData, orgId, eventId) => {
    const res = await qrScan(qrData, orgId, eventId);
    // console.log(JSON.stringify(res, null, 4));
    return res;
}

export { qrScanReq }