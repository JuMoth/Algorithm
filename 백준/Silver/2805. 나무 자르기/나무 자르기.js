const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let max = Math.max(...arr);
let min = 0;
let mid = 0;
let sum = 0;
let answer = 0;

while (min <= max) {
  sum = 0;
  mid = Math.floor((max + min) / 2);
  arr.forEach((v) => {
    let rest = v - mid;
    if (rest > 0) sum += rest;
  });

  if (sum >= M) {
    if (mid > answer) answer = mid;
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(answer);