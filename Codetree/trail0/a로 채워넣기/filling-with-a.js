const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("");

input[1] = "a";                  // 앞에서 2번째
input[input.length - 2] = "a";     // 뒤에서 2번째

input = input.join("");

console.log(input);