const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let N = Number(input[0]);
let M = input[1].split(" ").map(Number);

let answer = "";

for(let i=N-1; i>=0; i--) {
    if(M[i]%2 === 0) {
        answer += M[i] + " ";
    } else {
        continue;
    }
}

console.log(answer);