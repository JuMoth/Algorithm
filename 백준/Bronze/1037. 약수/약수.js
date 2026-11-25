const fs = require('fs');
const [Ncnt, factor] = fs.readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt').toString().trim().split("\n");

let answer = 0;

if(Ncnt === "1") {
    answer = Number(factor)**2;
} else {
    let factors = factor.split(" ").map(Number).sort((a, b) => a - b);
    answer = factors[0]*factors[factors.length-1];
}

console.log(answer);