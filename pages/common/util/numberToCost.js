const numberToCost = (num) => {
    const option = { maximumFractionDigits: 2 };
    // const res = num.toLocaleString('ko-KR', option).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const res = Number(num).toLocaleString('ko-KR', option).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return res;
}

export default numberToCost;