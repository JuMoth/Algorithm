const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const N = parseInt(input[0]);
const time = input[1].split(' ').map(Number).sort((a, b) => a-b);
let sum = 0;
time
    .reduce((acc, cur) => {
        sum += (acc + cur);
        return acc+cur;
    }, 0);

console.log(sum);

/* 최단 시간을 위한 사람의 줄서는 순서를 구하기
const obj = {};

for (let i = 0; i < times.length; i++) {
    obj[`P${i + 1}`] = times[i];
}

// 객체의 키-값 쌍을 배열로 변환
const entries = Object.entries(obj);

// 배열을 값(value)을 기준으로 오름차순 정렬
entries.sort((a, b) => a[1] - b[1]);

// 정렬된 배열을 이용하여 새로운 객체를 생성
const sortedObj = Object.fromEntries(entries);

console.log(Object.keys(sortedObj));
*/