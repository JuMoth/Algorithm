const fs = require("fs");
let A = +fs.readFileSync(0).toString().trim();

if(A%2 !== 0) {
    A = A+3;
}

if(A%3 === 0) {
    A = A/3;
}

console.log(A);