const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cnt = Number(input[0]);
let score = input[1].split(" ");

const maxScore = Math.max(...score);
let sum = 0;

for(let i of score) sum+=(i/maxScore*100);

console.log(sum/cnt);