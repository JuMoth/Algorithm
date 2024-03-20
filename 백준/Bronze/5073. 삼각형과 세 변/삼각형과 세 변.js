const input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(" ").map(Number));

for (let i = 0; i < input.length-1; i++) {
    let [a, b, c] = input[i].sort((a, b) => b - a);

    if (b + c > a) {
        if (a === b && b === c && c === a) console.log("Equilateral");
        else if (a === b || b === c || c === a) console.log("Isosceles");
        else console.log("Scalene");
    } else {
        console.log("Invalid");
    }
}