let [T, ...input] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
input = input.map(i => i.split(' '));
const arr = Array.from(Array(100), () =>Array(100).fill(0));
let cnt = 0;

for(let i=0; i<T; i++) {
    let startX = +input[i][0]; // 3 | 15 | 5
    let startY = +input[i][1]; // 7 | 7  | 2
    for(let j=0; j<10; j++) {
        for(let k=0; k<10; k++) {
            if(arr[startX + j][startY + k] !== 0) {
                continue;
            } 
            if(arr[startX + j][startY + k] === 0) {
                arr[startX + j][startY + k] = 1;
                cnt++;
            }
        }
    }
}
console.log(cnt);