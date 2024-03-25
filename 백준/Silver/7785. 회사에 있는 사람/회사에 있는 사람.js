const input = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');
input.shift();
let ans = new Set();
for(let i=0; i<input.length; i++) {
  const [name, state] = input[i].trim().split(' ');
  switch(state) {
    case "enter":
      ans.add(name);
      break;
    case "leave":
      ans.delete(name);
  }
}
console.log([...ans].sort().reverse().join('\n'));