const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input.shift();
let arr = input.map(Number);
let result = [];

function findDecimal(num) {
  if(num<2) return false;
  for(let i=2; i<=Math.sqrt(num); i++) {
    if(num%i === 0) return false;
  }
  return true;
}

while(arr.length) {
  if(findDecimal(arr[0])) {
    result.push(arr[0]);
    arr.shift();
  } else {
    arr[0]++;
  }
}

console.log(result.join('\n'));