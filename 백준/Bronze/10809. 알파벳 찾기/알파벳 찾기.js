const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = [];
for(let i='a'.charCodeAt(); i<= 'z'.charCodeAt(); i++) {
    result.push(input.indexOf(String.fromCharCode(i)));
}
console.log(result.join(' '));