const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let answer = "";

for(let i=input.length-1; i>=0; i--) {
    answer+=input[i];
}

console.log(answer);