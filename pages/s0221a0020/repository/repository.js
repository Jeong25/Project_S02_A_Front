import client from '../../common/api/client';

const qrScan = async (qrData, orgId, eventId) => {
    const res = await client.post('rest/v1/s0221a0020/qr-scan', { qrData, "orgId": orgId, "eventId": eventId });
    return res;
}

export { qrScan };