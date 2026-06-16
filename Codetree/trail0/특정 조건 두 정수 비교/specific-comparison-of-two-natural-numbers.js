const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let A1;
let A2;

if(a<b) { A1 = 1 } else{ A1 = 0 };
if(a==b) { A2 = 1 } else{ A2 = 0 };

console.log(`${A1} ${A2}`);