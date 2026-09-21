const fs = require("fs");
let [mm, dd, yyyy] = fs.readFileSync(0).toString().trim().split("-").map(Number);

console.log(`${yyyy}.${mm}.${dd}`);