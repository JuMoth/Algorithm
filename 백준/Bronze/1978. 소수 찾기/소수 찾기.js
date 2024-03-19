const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);
let ans = 0;
for(let i=0; i<N; i++) {
    let factors = [];
    for(let j=1; j<=nums[i]; j++) {
        if(nums[i]%j === 0) {
            factors.push(j);
        }
    }
    if(factors.length == 2) ans++;
}
console.log(ans);