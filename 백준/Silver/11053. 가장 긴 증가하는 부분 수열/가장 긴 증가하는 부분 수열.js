const [A, nums] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = nums.split(' ').map(Number);
const dp = new Array(A);
dp[0] = 1;

for(let i=1; i<A; i++) {
    let max = 0;
    for(let j=0; j<=i; j++) {
        if(arr[j] < arr[i]) {
            max = Math.max(max, dp[j]);
        }
    }
    dp[i] = max + 1;
}

console.log(Math.max(...dp));