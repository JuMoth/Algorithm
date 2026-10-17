const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let answer = [];

for(let i=1; i<=5; i++) {
    answer.push(N*i);
}

console.log(answer.join(" "));