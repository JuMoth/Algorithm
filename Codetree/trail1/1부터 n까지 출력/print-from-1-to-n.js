const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let result = [];

for(let i=1; i<N+1; i++) {
    result.push(i);
}

console.log(result.join(" "));