const fs = require("fs");
let a = +fs.readFileSync(0).toString().trim();

if(a%2 === 0) {
    a = a/2;
}

if(a%2 !== 0) {
    a = (a+1)/2;
}

console.log(a);