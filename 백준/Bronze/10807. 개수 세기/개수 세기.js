const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let total = Number(input[0]);
let cnt = 0;
for(let i=1; i<=total; i++) {
    let num = input[1].split(' ');
    if(input[2] === num[i-1]) cnt++;
}

console.log(cnt);