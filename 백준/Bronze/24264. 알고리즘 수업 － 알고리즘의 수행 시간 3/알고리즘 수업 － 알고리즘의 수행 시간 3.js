const input = require('fs').readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt').toString().trim();
const n = Number(input);


console.log(Math.pow(n, 2));
console.log(2);