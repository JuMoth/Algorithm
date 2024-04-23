const N = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

for (let i = 0; i<5; i++) {
  let a;
  if (i % 2) {
    a = "@";
  } else {
    a = " ";
  }
  for (let j = 0; j < N; j++) {
    console.log(
      `${"@".repeat(N)}${a.repeat(N * 3)}${"@".repeat(N)}`
    );
  }
}