const fs = require("fs");
let a = +fs.readFileSync(0).toString().trim();

a === 1 ? console.log("t") : console.log("f");