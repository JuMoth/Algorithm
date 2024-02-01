function solution(n) {
    let cnt = new Set();
    for(let i=1; i<=n; i++) {
        for(let j=2; j<i; j++) {
            if(i%j === 0) {
                cnt.add(i)
            }
        }
    }
    return cnt.size;
}