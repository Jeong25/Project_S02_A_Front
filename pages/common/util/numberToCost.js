const numberToCost = (num) => {
    const option = { maximumFractionDigits: 2 };
    // const res = num.toLocaleString('ko-KR', option).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    if (num > 0) {
        const res = Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return res;
    } else {
        const res = ''
        return res;
    }
}

export default numberToCost;