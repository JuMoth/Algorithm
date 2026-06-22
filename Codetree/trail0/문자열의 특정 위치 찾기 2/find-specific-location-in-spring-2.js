const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];
let cnt = 0;

for(let i of arr) {
    if(i.charAt(2) === input || i.charAt(3) === input) {
        console.log(i);
        cnt++;
    } else continue;
}

console.log(cnt);