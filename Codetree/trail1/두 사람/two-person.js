const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [ageA, genA] = input[0].split(" ");
let [ageB, genB] = input[1].split(" ");

if((Number(ageA)>=19 && genA === "M") || (Number(ageB)>=19 && genB === "M")) {
    console.log(1);
} else {
    console.log(0);
}