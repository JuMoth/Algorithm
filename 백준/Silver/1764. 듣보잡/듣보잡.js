const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nSet = new Set();
const mSet = new Set();
let ans = [];

input.forEach((el, idx) => {
  if(idx < N) {
    nSet.add(el);
  } else {
    mSet.add(el);
  }
});

nSet.forEach(el => {
  if(mSet.has(el)) ans.push(el);
});

console.log(ans.length + '\n' + ans.sort().join('\n'));
