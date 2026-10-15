const fs = require("fs");
let n = +fs.readFileSync(0).toString().trim();

let answer = [];

for(let i=n; i<101; i++) {
    answer.push(i);
}

console.log(answer.join(" "));