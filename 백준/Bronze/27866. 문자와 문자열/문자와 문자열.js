const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let pos = Number(input[1]);
console.log(input[0][pos-1]);