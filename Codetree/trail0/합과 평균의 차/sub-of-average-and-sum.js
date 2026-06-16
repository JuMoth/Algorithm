const fs = require("fs");
let i = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = i[0]+i[1]+i[2];
let avg = sum/i.length;

console.log(sum);
console.log(avg);
console.log(sum-avg);