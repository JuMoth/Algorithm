const fs = require("fs");
let N = fs.readFileSync(0).toString().trim();
N = Number(N);
if((N%2 === 1 && N%3 === 0) || (N%2 === 0 && N%5 === 0)) {
    console.log("true");
} else {
    console.log("false");
}