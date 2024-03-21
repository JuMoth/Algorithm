const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim();

const N = Number(input);
let num = 666;
let cnt = 1;
while(cnt !== N) {
    num++;
    if(String(num).includes("666")) cnt++;
}
console.log(num);