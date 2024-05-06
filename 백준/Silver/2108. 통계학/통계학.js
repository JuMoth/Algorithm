let [N, ...nums] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

nums.sort((a,b)=>a-b);
let answer = '';

// 산술평균
answer += `${Math.round(nums.reduce((a, b) => a + b, 0)/N)}\n`;

// 중앙값
answer += `${nums[Math.floor(N/2)]}\n`;

// 최빈값
const map = new Map();
let max = 1;
for (let num of nums) {
  if (map.has(num)) {
    max = Math.max(max, map.get(num) + 1);
    map.set(num, map.get(num) + 1);
  } else map.set(num, 1);
}

const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;

// 범위
answer += `${nums[N - 1] - nums[0]}\n`;

console.log(answer);