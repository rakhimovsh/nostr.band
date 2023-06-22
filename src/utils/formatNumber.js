export function formatNumber(value) {
    if(!value) return value
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;
    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
        value /= 1000;
        suffixIndex++;
    }
    return toFixedNoZeros(value,1) + suffixes[suffixIndex];
}

function  toFixedNoZeros(number, n) {
    let num = number.toFixed(n);
    let decimalIndex = num.indexOf('.');
    if (decimalIndex !== -1) {
        let i = num.length - 1;
        while (i >= decimalIndex && num[i] === '0') {
            i--;
        }
        num = num.slice(0, i + 1);
        if (num[num.length - 1] === '.') {
            num = num.slice(0, -1);
        }
    }
    return num;
}