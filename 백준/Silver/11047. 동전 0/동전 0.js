const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

let [N, K] = input.shift().split(' ');
const coin = input.map(Number).sort((a, b)=>b-a);
let cnt = 0;
for(let i=0; i<coin.length; i++) {
    cnt += Math.floor(K/coin[i]);
    K = K%coin[i];
}

console.log(cnt);