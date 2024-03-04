const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let str = input.split('').reverse().join('');
console.log(input==str?1:0);