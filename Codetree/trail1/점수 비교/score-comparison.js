const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [aMath, aEng] = input[0].split(" ").map(Number);
let [bMath, bEng] = input[1].split(" ").map(Number);

if(aMath>bMath) {
    if(aEng>bEng) {
        console.log(1);
    } else {
        console.log(0);
    }
} else {
    console.log(0);
}