const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

for (let i = 2; i < 10; i++) {
    input[i] = (input[i - 2] + input[i - 1]) % 10;
}

console.log(input.join(' '));