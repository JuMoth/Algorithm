const fs = require("fs");
let N = +fs.readFileSync(0).toString().trim();

for(let i=1; i<=N; i++) {
    let pyramid = [];
    for(let j=1; j<=i; j++) {
        pyramid.push(i);        
    }
    console.log(pyramid.join(" "));
}