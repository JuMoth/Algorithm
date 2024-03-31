const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const T = parseInt(input.shift());
let num = 0;

function factorial(num) {
  if(num <= 1) return 1;
  return num * factorial(num-1);
}

for(let i=0; i<T; i++) {
  const arr = input[i].split(' ');
  const N = parseInt(arr[0]);
  const M = parseInt(arr[1]);
  console.log(Math.round((factorial(M)/(factorial(M-N)*factorial(N)))));
}