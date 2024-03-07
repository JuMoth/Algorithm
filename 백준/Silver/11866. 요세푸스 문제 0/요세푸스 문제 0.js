const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = new Array(N).fill().map((v, i)=> i+1);
let ans = [];

for(let i=0; i<N; i++) {
    for(let j=1; j<=K; j++) {
        if(j === K) {
            ans.push(arr.shift());
        } else {
            arr.push(arr.shift());
        }
    }
}

console.log('<' + ans.join(', ') + '>');