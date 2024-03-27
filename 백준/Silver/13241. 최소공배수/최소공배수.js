const [a, b] = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

function getGcd(a, b) {
  if(b === 0) return a;
  return getGcd(b, a%b);
}

console.log((a*b)/getGcd(a, b));