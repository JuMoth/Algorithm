const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

console.log(A+B);
console.log(A-B);
console.log(Math.floor(A/B));
console.log(A%B);