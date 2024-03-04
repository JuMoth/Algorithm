const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const reg = [1, 1, 2, 2, 2, 8];
let result = [];

for(let i=0; i<6; i++) {
    result.push(reg[i]-Number(input[i]));
}

console.log(result.join(' '));
