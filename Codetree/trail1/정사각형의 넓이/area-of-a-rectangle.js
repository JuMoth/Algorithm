const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim().split(" ");

if(N>=5) {
    console.log(N*N);
} else {
    console.log(N*N);
    console.log("tiny");
}