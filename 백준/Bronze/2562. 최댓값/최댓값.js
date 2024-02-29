const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let numArr = [];
for(let i=0; i<input.length; i++) {
    numArr.push(input[i]);
}
let numMax = Math.max(...numArr);
console.log(numMax);
console.log(numArr.indexOf(numMax)+1);