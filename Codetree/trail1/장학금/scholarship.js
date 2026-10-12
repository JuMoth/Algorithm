const fs = require("fs");
let [m, f] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(m >= 90 && f >= 95) {
    console.log(100000);
} else if(m >= 90 && f >= 90) {
    console.log(50000);
} else {
    console.log(0);
}