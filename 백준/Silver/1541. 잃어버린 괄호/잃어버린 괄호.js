const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim();

const numbers = input.split("-").map(e => e.split("+").map(Number).reduce((acc, cur) => acc + cur, 0));
let answer = 2 * numbers[0] - numbers.reduce((acc, cur) => acc + cur, 0);
console.log(answer);