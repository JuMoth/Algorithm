const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = "";

while(true) {
    if(A<=B) {
        if(A%2 === 1) {
            answer += A + " ";
            A = A*2;
        } else {
            answer += A + " ";
            A += 3;
        }
    } else {
        break;
    }
}

console.log(answer);