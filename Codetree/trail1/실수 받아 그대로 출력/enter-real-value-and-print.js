const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

console.log(N.toFixed(2));