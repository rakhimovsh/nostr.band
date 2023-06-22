export function formatNumber(value) {
    if(!value) return
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixIndex = 0;
    while (value >= 1000 && suffixIndex < suffixes.length - 1) {
        value /= 1000;
        suffixIndex++;
    }
    return value.toFixed(2) + suffixes[suffixIndex];
}