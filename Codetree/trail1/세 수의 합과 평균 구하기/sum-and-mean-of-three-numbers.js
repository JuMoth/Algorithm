const fs = require("fs");
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(a+b+c);
console.log(Math.floor((a+b+c)/3));