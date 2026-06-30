const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

let answer = [];

for (let row=0; row<N; row++) {
  let line = "";

  for (let col=0; col<N; col++) {
    if (col%2 === 0) {
      line += row + 1;
    } else {
      line += N - row;
    }
  }

  answer.push(line);
}

console.log(answer.join("\n"));