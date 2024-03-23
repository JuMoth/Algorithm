const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const N = Number(input[0]);
const arr1 = new Set(input[1].split(' ').map(Number));
const M = Number(input[2]);
const arr2 = input[3].split(' ').map(Number);

let ans = [];

for(let i of arr2) arr1.has(i)?ans.push(1):ans.push(0);

console.log(ans.join(' '));