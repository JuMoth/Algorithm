const input = require('fs')
    .readFileSync(process.platform === 'linux'?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const stepCount = input[0];
// index를 1부터 시작하기 위해
const dp = new Array(stepCount+1);
// 메모이제이션
dp[1] = input[1]; // 계단이 1개인 경우
dp[2] = dp[1] + input[2]; // 계단이 2개인 경우
dp[3] = Math.max(input[1], input[2]) + input[3]; // 계단이 3개인 경우

for(let i=4; i<=stepCount; i++) {
    dp[i] = Math.max(dp[i-3] + input[i-1] + input[i], dp[i-2] + input[i]);
}

console.log(dp[stepCount]);