const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const A = new Set(input[0].split(' ').map(Number));
const B = new Set(input[1].split(' ').map(Number));
let ans = new Set([...A, ...B]);

A.forEach(e => {
  if(B.has(e)) ans.delete(e);
});

console.log(ans.size);