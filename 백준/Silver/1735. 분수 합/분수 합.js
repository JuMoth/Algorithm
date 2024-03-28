const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [a1, a2] = input[0].split(' ').map(Number);
const [b1, b2] = input[1].split(' ').map(Number);
const top = a1*b2 + a2*b1;
const bottom = a2*b2;

let x = top;
let y = bottom;

while(x !== 0) {
    let temp = y%x;
    y = x;
    x = temp;
}

console.log(`${top/y} ${bottom/y}`);