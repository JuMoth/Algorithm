const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

input.shift();
let uniqueStr = [...new Set(input)];
uniqueStr = uniqueStr.sort((a,b)=> a.length - b.length || a.localeCompare(b)).join('\n');
console.log(uniqueStr);