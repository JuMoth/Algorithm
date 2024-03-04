const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(' ');

let n = Number(a.split('').reverse().join(''));
let m = Number(b.split('').reverse().join(''));

console.log(n>m?n:m);