const fs = require('fs');
const [N, kim, lim] = fs.readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt').toString().trim().split(" ").map(Number);

let a = kim;
let b = lim;
let round = 0;

while(a !== b) {
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    round++;
}

console.log(round);