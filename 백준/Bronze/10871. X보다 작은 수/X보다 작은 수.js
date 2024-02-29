const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0].split(' ').map(Number);
let nums = input[1].split(' ').map(Number);

let ans = [];

for(let i=0; i<=num[0]; i++) {
    if(nums[i] < num[1]) {
        ans.push(nums[i]);
    }
}

console.log(ans.join(' '));