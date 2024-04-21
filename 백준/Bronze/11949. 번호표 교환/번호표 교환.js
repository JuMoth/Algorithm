const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(' ').map(Number);
const A = input.slice(1).map(Number);

for (let i = 1; i <= M; i++) {
  for (let j = 0; j < N - 1; j++) {
    if (A[j] % i > A[j + 1] % i) {
      const tmp = A[j];
      A[j] = A[j + 1];
      A[j + 1] = tmp;
    }
  }
}

console.log(A.join('\n'));