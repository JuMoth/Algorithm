const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let ans = '';

for(let i=1; i<=cnt; i++) {
    let ab = input[i].split(' ');
    ans += `Case #${i}: ${Number(ab[0])+Number(ab[1])}` + "\n";
}

console.log(ans);