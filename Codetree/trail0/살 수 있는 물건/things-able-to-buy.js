const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(input>=3000) {
    console.log("book");
} else if(input>=1000) {
    console.log("mask");
} else {
    console.log("no");
}