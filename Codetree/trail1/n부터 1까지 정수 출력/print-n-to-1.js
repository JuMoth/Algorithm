const fs = require("fs");
let n = +fs.readFileSync(0).toString().trim();

let answer = [];

while(n>=1) {
    answer.push(n);
    n--;
}

console.log(answer.join(" "));