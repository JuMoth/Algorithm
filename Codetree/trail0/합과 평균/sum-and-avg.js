const fs = require("fs");
let i = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = i[0]+i[1];
let avg = (i[0]+i[1])/2;

console.log(`${sum} ${avg.toFixed(1)}`);