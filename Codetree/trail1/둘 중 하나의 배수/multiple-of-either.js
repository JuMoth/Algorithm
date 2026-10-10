const fs = require("fs");
let A = +fs.readFileSync(0).toString().trim();

if(A%3 === 0 || A%5 === 0) {
    console.log(1);
} else {
    console.log(0);
}