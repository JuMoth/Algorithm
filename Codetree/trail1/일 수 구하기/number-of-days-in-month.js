const fs = require("fs");
let n = +fs.readFileSync(0).toString().trim();

let thirtyOne = [1, 3, 5, 7, 8, 10, 12];
let thirty = [4, 6, 9, 11];

if(thirtyOne.includes(n)) {
    console.log(31);
} else if(thirty.includes(n)) {
    console.log(30);
} else if(n === 2) {
    console.log(28);
} else {
    console.log("false");
}