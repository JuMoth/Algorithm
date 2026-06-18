const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [aMath, aEng] = input[0].split(" ").map(Number);
const [bMath, bEng] = input[1].split(" ").map(Number);

if(aMath > bMath && aEng > bEng) {
    console.log(1);
} else {
    console.log(0);
}