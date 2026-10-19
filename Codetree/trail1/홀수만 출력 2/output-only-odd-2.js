const fs = require("fs");
let [B, A] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = [];

for(let i=B; i>=A; i--) {
    if(i%2 === 1) {
        answer.push(i);
    }
}

console.log(answer.join(" "));