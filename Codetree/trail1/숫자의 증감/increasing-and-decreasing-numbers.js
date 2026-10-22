const fs = require("fs");
let [C, N] = fs.readFileSync(0).toString().trim().split(" ");

let answer = [];

if(C === "A") {
    for(let i=1; i<=Number(N); i++) {
        answer.push(i);
    }
} else if(C === "D") {
    for(let i=N; i>0; i--) {
        answer.push(i);
    }
}

console.log(answer.join(" "));