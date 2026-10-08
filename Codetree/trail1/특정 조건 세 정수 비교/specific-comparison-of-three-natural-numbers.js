const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let firstA = 0;
let secondA = 0;

if(a<=b && a<=c) {
    firstA = 1;
} else {
    firstA = 0;
}

if(a === b && b === c) {
    secondA = 1;
} else {
    secondA = 0;
}

console.log(`${firstA} ${secondA}`);