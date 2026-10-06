const fs = require("fs");
let A = +fs.readFileSync(0).toString().trim();

A%3 === 0 ? console.log("YES") : console.log("NO");
A%5 === 0 ? console.log("YES") : console.log("NO");