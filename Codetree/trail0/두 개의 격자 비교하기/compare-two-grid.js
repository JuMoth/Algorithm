const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);

let answer = [];

for(let i=0; i<N; i++) {
    let arr1 = input[i+1].split(" ").map(Number);
    let arr2 = input[i+1+N].split(" ").map(Number);

    let row = [];

    for(let j=0; j<M; j++) {
        if(arr1[j] === arr2[j]) {
            row.push(0);
        } else {
            row.push(1);
        }
    }
    answer.push(row.join(" "));
}

console.log(answer.join("\n"));