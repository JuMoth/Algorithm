const fs = require("fs");
let [A, N] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for(let i = 0; i < N; i++) {
    A = A + N;
    console.log(A);
}