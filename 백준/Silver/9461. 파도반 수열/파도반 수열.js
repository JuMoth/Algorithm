const [T, ...nums] = require('fs')
    .readFileSync(process.platform === 'linux'?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const Max = Math.max(...nums);
const dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for(let i=3; i<Max; i++) {
    dp[i] = dp[i-3] + dp[i-2];
}

nums.forEach(v => {
    console.log(dp[v-1]);
})