const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

for(let i=0; i<N; i++) {
    let row = [];
    for(let j=0; j<N; j++) {
        row.push(j+1);
    }
    if(i%2 === 1) {
        row.reverse();
    }
    let answer = "";
    for(let k of row) { answer += k };
    console.log(answer);
}