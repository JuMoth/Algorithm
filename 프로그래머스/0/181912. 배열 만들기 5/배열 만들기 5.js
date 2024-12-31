function solution(intStrs, k, s, l) {
    let result = []
    intStrs.forEach(a => {
        const sliceStr = a.slice(s, s+l)
        const num = Number(sliceStr)
        if(num > k) {
            result.push(num);
        }
    });
    return result;
}