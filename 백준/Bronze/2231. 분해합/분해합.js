const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim();

const N = Number(input);
const cnt = input.length;
let disassemble = [];
for(let i=cnt; i<N-cnt; i++) {
    if(N===(N-i+String(N-i).split('').map(e=> Number(e)).reduce((acc, cur)=> acc+cur, 0))) {
        disassemble.push(N-i);
    } else {
        continue;
    }
}
console.log(disassemble.length>0?Math.min(...disassemble):0);