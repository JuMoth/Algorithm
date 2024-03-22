const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, k] = input[0].split(' ').map(Number);
const scores = input[1].split(' ').map(Number).sort((a,b)=>b-a); // 100 98 93 85 76

console.log(scores[k-1]);