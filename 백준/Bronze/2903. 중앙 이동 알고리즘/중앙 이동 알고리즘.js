const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

// let ans = Math.pow(N+Math.pow(2, N), 2);
let ans = 2;
for(let i=0; i<N; i++) {
    ans += Math.pow(2, i);
}

console.log(Math.pow(ans, 2));