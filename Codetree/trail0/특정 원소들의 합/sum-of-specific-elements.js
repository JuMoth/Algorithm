const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;

for(let i=0; i<4; i++) {
    let inputArr = input[i].split(" ").map(Number);
    for(let j=0; j<4; j++) {
        if(j === i) {
            sum += inputArr[j];
            break;
        } else {
            sum += inputArr[j];
        }
        
    }
}

console.log(sum);