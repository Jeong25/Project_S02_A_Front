import client from '../../common/api/client';

const qrInfo = async (eventId) => {
        const res = await client.get(`rest/v1/s0221a0020/qr-info?eventId=${eventId}`);
        return res;
}

const qrScan = async (params) => {
        const res = await client.post('rest/v1/s0221a0020/qr-scan', params);
        return res;
}

export { qrInfo, qrScan };