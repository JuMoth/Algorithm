const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
let nums = input[1].split('').map(Number);
for(let i of nums) sum+= i;
console.log(sum);