const [M, N] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function getFactor(num) {
    let factors = [];
    for(let i=1; i<=num; i++) {
        if(num%i === 0) {
            factors.push(i);
        }
    }
    return factors.length === 2 ? true : false;
}

let ans = [];
let factor = [];
let sum = 0;
for(let i=M; i<=N; i++) {
    if(getFactor(i)) {
        sum += i;
        factor.push(i);
    }
}
ans.push(sum, factor[0]);
console.log(sum === 0? -1 : ans.join('\n'));