const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for(let i=0; i<input.length; i++) {
    let answer = "";
    let arr = input[i].split(" ").map(Number);
    for(let j=0; j<arr.length; j++) {
        answer += `${arr[j]*3 } `
    }
    console.log(answer);
}