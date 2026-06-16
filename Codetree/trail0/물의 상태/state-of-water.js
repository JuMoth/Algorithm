const fs = require("fs");
let wt = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if (wt < 0) {
    console.log("ice");
}
else if (wt >= 100) {
    console.log("vapor");
}
else {
    console.log("water");
}