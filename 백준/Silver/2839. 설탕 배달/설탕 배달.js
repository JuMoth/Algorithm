const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim();

let N = Number(input);
let cnt = 0;
for(let i=0; ; i++) {
    if(N%5 === 0) {
        cnt += N/5;
        break;
    }
    if(0 > N) {
        cnt = -1;
        break;
    }
    cnt++;
    N -= 3;
}
console.log(cnt);