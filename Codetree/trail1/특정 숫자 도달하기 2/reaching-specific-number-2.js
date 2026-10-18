const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let answer = [];

for(let i=N; i>0; i--) {
    answer.push(i);
}

console.log(answer.join(" "));