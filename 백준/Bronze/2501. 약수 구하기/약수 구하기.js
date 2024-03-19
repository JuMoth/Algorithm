const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let factor = [];
for(let i=1; i<=N; i++) {
    if(N%i === 0) {
        factor.push(i);
    }
}
console.log(factor.length>=K?factor[K-1]:0);