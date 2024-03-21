const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
let sum = 0;
let maxSum = 0;
for(let i=0; i<N-2; i++) {
    for(let j=i+1; j<N-1; j++) {
        for(let k=j+1; k<N; k++) {
            sum = nums[i] + nums[j] + nums[k];
            if(sum <= M && sum > maxSum) {
                maxSum = sum;
            }
        }
    }
}
console.log(maxSum);