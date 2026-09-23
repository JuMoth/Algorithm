const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let changedA = a+b;

let changedB = b+changedA;

console.log(changedA, changedB);