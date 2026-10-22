const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(BigInt);

let answer = (A / B).toString() + ".";
let remainder = A % B;

for (let i = 0; i < 20; i++) {
  remainder *= 10n;
  answer += (remainder / B).toString();
  remainder %= B;
}

console.log(answer);