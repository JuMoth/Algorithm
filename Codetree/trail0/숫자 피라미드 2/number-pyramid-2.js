const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();
let num = 1;

for(let i=1; i<=N; i++) {
    let answer = "";

    for(let j=1; j<=i; j++) {
        answer += num+" ";
        num++;
    }
    console.log(answer);
}