const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input.shift();
let ans = [];
function getGcd(a, b) {
  if(b === 0) return a;
  return getGcd(b, a%b);
}

for(let i=0; i<input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  ans.push((a*b)/getGcd(a, b));
}

console.log(ans.join('\n'));