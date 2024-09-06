const [M, N] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(v => Number(v));

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

let result = [];
for(let i=M; i<=N; i++) {
  if(isPrime(i) === true) {
    result.push(i);
  }
}
console.log(result.join('\n'));