const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let ans = [];
let sum = 0;
for(let i of input) sum+=i;
ans.push(sum/input.length);
let middle = input.sort((a,b)=>a-b)[2];
ans.push(middle);

console.log(ans.join('\n'));