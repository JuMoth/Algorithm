const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();

let answer = "";
for(let i=1; i<6; i++) {
    answer += Number(N)*i + " ";
}

console.log(answer);
