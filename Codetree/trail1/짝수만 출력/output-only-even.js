const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = [];

while(A<=B) {
    answer.push(A);
    A+=2;
}

console.log(answer.join(" "));