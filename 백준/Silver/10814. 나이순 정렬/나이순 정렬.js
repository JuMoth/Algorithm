const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

input.shift();
input.sort((a,b)=>a.split(' ')[0] - b.split(' ')[0]);

console.log(input.join('\n'));