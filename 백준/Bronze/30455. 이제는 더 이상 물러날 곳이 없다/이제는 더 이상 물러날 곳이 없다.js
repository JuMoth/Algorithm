const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

console.log(Number(input)%2 === 0 ? "Duck" : "Goose");