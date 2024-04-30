const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let n = Number(input);
let k = 1;
for(let i=10; ; i*=10) {
  if(n>i) {
    let pow = Math.pow(10, k);
    n /= pow;
    n = Math.round(n);
    n *= pow;
  } else break;
  k++;
}

console.log(n);