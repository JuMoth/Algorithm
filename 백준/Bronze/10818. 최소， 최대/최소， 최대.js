const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
let nums = input[1].split(' ').map(Number).sort((a,b)=>a-b);

console.log(`${nums[0]} ${nums[cnt-1]}`);