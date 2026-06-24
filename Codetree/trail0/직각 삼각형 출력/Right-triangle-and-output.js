const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

for(let i=1; i<N+1; i++) {
    let answer = "";
    for(let j=0; j<i*2-1; j++) {
        answer += "*";
    }
    console.log(answer);
}