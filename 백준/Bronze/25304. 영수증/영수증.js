const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

let total = Number(input[0]);
let cnt = Number(input[1]);
let sum = 0;
for(let i=2; i<cnt+2; i++) {
    let product = input[i].split(' ');
    sum += Number(product[0])*Number(product[1]);
}

if(total === sum) {
    console.log("Yes");
} else {
    console.log("No");
}