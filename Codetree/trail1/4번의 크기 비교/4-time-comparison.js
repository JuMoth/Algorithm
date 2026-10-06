const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let A = +input[0];
let [B, C, D, E] = input[1].split(" ").map(Number);

console.log(+(A>B));
console.log(+(A>C));
console.log(+(A>D));
console.log(+(A>E));