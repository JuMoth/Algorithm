const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = [];

for(let i=A; i<=B; i+=2) {
    answer.push(i);
}

console.log(answer.join(" "));