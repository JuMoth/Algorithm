const fs = require("fs");
let [B, A] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = [];

while(B>=A) {
    answer.push(B);
    B-=2;
}

console.log(answer.join(" "))