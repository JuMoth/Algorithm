function solution(n) {
    let sum = 0;
    let m = 0;
    while(m <= n) {
        sum += m;
        m+=2;
    }
    return sum;
}