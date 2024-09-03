let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(v => Number(v.trim()));

let N = input.shift();
let stack = [];
let result = 0;

for(let nums of input) {
  if(nums === 0) {
    stack.pop();
  } else {
    stack.push(nums);
  }
}

for(let stk of stack) {
  result += stk;
}

console.log(result);