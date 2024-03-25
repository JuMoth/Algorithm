const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const cards = input[1].split(' ').map(Number);
const hasCard = input[3].split(' ').map(Number)

let ans = [];
const cntMap = new Map();
for(let i of cards) {
  if(cntMap.has(i)) cntMap.set(i, cntMap.get(i)+1);
  else cntMap.set(i, 1);
}

for(let j of hasCard) {
  if(cntMap.has(j)) ans.push(cntMap.get(j));
  else ans.push(0);
}

console.log(ans.join(' '));