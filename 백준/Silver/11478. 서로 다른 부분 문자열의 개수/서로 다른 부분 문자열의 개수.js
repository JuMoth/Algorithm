const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim();

let ans = new Set();

for(let i=0; i<input.length; i++) {
  for(let j=i; j<input.length; j++) {
    ans.add(input.substring(i, j+1));
  }
}

console.log(ans.size);