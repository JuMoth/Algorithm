const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;
input.forEach((num) => {
  sum += num;
});

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - input[i] - input[j] === 100) {
      input[i] = 0;
      input[j] = 0;
      input.sort((a, b) => a - b);
      for (let k = 2; k < 9; k++) {
        console.log(input[k]);
      }
      return;
    }
  }
}