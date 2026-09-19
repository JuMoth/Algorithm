const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = +input[1];

console.log(`${a} ${b} ${c}`);