const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

if(Number(input)%2 === 0) console.log("Duck");
else console.log("Goose");