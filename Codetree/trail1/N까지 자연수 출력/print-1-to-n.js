const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let answer = [];
let i = 1;

while(i<=N) {
    answer.push(i);
    i++;
}

console.log(answer.join(" "));