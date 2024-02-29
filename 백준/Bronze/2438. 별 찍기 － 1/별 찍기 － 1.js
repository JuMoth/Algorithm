const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let ans = '';

for(let i=0; i<input; i++) {
    ans += "*";
    console.log(ans);
}