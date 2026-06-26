const fs = require("fs");
let [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let dc = 0;

for(let i=start; i<=end; i++) {
    let cnt = 0;
    for(let j=1; j<=i; j++) {
        if(i%j === 0) {
            cnt++;
        }
    }
    if(cnt === 3) {
        dc++;
    }
}

console.log(dc);