const [nums, ...pocketmon] = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const [N, M] = nums.split(' ').map(Number);
const pocketmons = pocketmon.slice(0, N).map(e=>e.trim());
const pocketmonMap = new Map(pocketmons.map((v, i) => [v, i+1]));

const Question = pocketmon.slice(N).map(e=> e.trim());

let ans = [];

Question.forEach(e=> {
  if(!isNaN(e)) { // 질문이 숫자일때
    ans.push(pocketmons[Number(e) - 1]);
  } else { // 질문이 포켓몬 이름일때
    ans.push(pocketmonMap.get(e));
  }
})
console.log(ans.join('\n'));