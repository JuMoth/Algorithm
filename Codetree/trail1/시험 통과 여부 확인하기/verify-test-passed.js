const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(N>=80) {
    console.log("pass");
} else {
    console.log(`${80-N} more score`);
}