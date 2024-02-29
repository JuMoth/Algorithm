const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let ans = "";
let blank = "";

for(let i=1; i<=input; i++) {
    ans += "*";
    for(let j=0; j<input-i; j++) {
        blank += " ";
    }
    console.log(blank + ans);
    blank = "";
}