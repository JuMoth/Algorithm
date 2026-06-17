const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = "";
for(let i=B; i>=A; i--) {
    answer += i + " ";
}

console.log(answer);