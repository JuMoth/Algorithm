const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let N = +input[0];

for(let i=1; i<=N; i++) {
    let [a, b] = input[i].split(" ").map(Number);

    let eSum = 0;
    for(let j=a; j<=b; j++) {
        if(j%2 === 0) {
            eSum += j;
        } else continue;
    }
    console.log(eSum);
}