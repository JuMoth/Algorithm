const fs = require("fs");
let [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(B>A && B<C) {
    console.log(1);
} else {
    console.log(0);
}