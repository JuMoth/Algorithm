const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let answer = '';

for(let i=1; i<=cnt; i++) {
    let testCase = input[i].split(' ');
    answer += Number(testCase[0]) + Number(testCase[1]) + "\n";
}

console.log(answer);