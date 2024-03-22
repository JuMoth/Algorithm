const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('')
    .map(Number)
    .sort((a,b)=>b-a)
    .map(String)
    .join('');

console.log(input);