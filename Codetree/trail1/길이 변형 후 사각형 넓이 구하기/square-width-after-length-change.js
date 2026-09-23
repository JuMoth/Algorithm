const fs = require("fs");
let [width, height] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
[width, height] = [width+8, height*3]

console.log(width);
console.log(height);
console.log(width*height);