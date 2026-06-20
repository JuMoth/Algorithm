const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let N = input[0];
let M = input[1].split(" ").map(Number);
let answer = "";

for(let i=0; i<Number(N); i++) {
    answer += M[i]*M[i] + " ";
}

console.log(answer);