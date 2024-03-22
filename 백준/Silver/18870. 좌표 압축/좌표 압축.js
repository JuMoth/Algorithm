const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

input.shift();
const nums = input[0].split(' ').map(Number).sort((a,b)=>a-b);
const set = new Set(nums);
const map = new Map();

[...set].forEach((item, idx) => {
    map.set(item, idx);
})

let ans = '';
input[0].split(' ').forEach((item, idx) => {
    ans += map.get(+item) + ' ';
})

console.log(ans);