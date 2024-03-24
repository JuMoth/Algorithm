const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(" ").map(Number);
const strInput = input;
const list = strInput.slice(0, N);
const candidate = strInput.slice(N);
const set = new Set(list);

let ans = 0;
candidate.forEach((str) => {
  if (set.has(str)) ++ans;
});

console.log(ans);