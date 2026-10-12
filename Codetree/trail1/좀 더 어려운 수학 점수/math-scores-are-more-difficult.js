const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [mathA, engA] = input[0].split(" ").map(Number);
let [mathB, engB] = input[1].split(" ").map(Number);

if(mathA > mathB) {
    console.log("A");
} else if(mathB > mathA) {
    console.log("B");
} else {
    if(engA > engB) {
        console.log("A");
    } else if(engB > engA) {
        console.log("B");
    }
}