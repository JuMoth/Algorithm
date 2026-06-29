const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let fiveCnt = 0;

for(let i=0; i<4; i++) {
    let inputArr = input[i].split(" ").map(Number);
    for(let j of inputArr) {
        if(j%5 === 0) {
            fiveCnt++;
        } else continue;
    }
}

console.log(fiveCnt);