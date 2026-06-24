const fs = require("fs");
let [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = "";

for(let i=0; i<N; i++) {
    for(let j=0; j<M; j++) {
        if(j === M-1) {
            answer += "*\n";
        } else {
            answer += "* ";
        }
    }
}

console.log(answer);