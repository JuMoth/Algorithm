let [N, ...nums] = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

console.log(nums.sort((a,b)=>a-b).join('\n'));