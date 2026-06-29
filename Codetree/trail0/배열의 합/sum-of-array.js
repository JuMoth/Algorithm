const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i=0; i<input.length; i++) {
    let sum = 0;
    let arr = input[i].split(" ").map(Number);

    for(let j of arr) {
        sum += j;
    }
    console.log(sum);
}