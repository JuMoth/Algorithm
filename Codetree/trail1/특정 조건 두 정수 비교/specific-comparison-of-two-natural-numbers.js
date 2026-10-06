const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let first = A < B ? 1 : 0;
let second = A === B ? 1 : 0;

console.log(`${first} ${second}`);