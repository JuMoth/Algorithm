const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();
const n = Number(input);

console.log(4*n);