const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let result = [];
for(let i=0; i<input.length; i++) {
    result.push(input[i]%42);
}
const noDup = new Set(result);
console.log([...noDup].length);