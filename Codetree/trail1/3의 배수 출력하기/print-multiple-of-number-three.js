const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let answer = [];
let i=3;

while(i<=N) {
    answer.push(i);
    i+=3;
}

console.log(answer.join(" "));