const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

// let i = 1;
// let sum = 0;
// while (true) {
//   sum += i;
//   if (sum > N) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

let sum = 0;

for(let i=1; i<=100; i++) {
  sum += i;
  if(sum >= N) {
    console.log(i);
    break;
  }
}