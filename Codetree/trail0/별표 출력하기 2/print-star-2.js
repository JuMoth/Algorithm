const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let answer = "";

for(let i=N; i>0; i--) {
    for(let j=i; j>0; j--) {
        answer += "* ";
    }
    answer += "\n";
}

console.log(answer);