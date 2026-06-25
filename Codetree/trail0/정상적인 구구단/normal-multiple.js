const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

for(let i=1; i<=N; i++) {
    let mt = [];
    for(let j=1; j<=N; j++) {
        mt.push(`${i} * ${j} = ${i*j}`);
    }
    console.log(mt.join(", "));
}