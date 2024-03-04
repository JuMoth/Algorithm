const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i of input) {
    console.log(i);
}