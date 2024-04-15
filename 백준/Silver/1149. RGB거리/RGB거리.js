let [N, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux'?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

arr = arr.map(el => el.split(' ').map(Number));

for(let i=1; i<N; i++) {
    // 탑다운 방식
    // 3가지 case를 전부 담아가며 내려간다
    arr[i][0] += Math.min(arr[i-1][1], arr[i-1][2]);
    arr[i][1] += Math.min(arr[i-1][0], arr[i-1][2]);
    arr[i][2] += Math.min(arr[i-1][0], arr[i-1][1]);
}
// 3가지 case 중에서 최소값을 추출
console.log(Math.min(...arr[+N-1]));