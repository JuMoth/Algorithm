const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

console.log(input);
if(Number(input)<0) {
    console.log("minus");
} else {
    console.log("");
}