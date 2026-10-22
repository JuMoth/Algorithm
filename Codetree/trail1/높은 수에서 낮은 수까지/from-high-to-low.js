const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = [];

if(A >= B) {
    for(let i=A; i>=B; i--) {
        answer.push(i);
    }
} else if(B >= A) {
    for(let i=B; i>=A; i--) {
        answer.push(i);
    }
}

console.log(answer.join(" "));