const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let i=0;

while(true) {
    if(input[i]>25) {
        console.log("Lower");
        i++;
    } else if(input[i]<25) {
        console.log("Higher");
        i++;
    } else {
        console.log("Good");
        break;
    }
}