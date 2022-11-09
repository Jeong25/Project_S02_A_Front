import client from '../../common/api/client';

const qrInfo = async (eventId) => {
    try {
        const res = await client.get(`rest/v1/s0221a0020/qr-info?eventId=${eventId}`);
        return res;
    } catch (e) {
        console.log(e);
    }
}

const qrScan = async (params) => {
    try {
        const res = await client.post('rest/v1/s0221a0020/qr-scan', params);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export { qrInfo, qrScan };