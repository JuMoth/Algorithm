const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let Tcnt = 0;
let Fcnt = 0;

for(let i=0; i<10; i++) {
    if(input[i]%3 === 0 && input[i]%5 === 0) {
        Tcnt++;
        Fcnt++;
    } else if(input[i]%3 === 0) {
        Tcnt++;
    } else if(input[i]%5 === 0) {
        Fcnt++;
    } else continue;
}

console.log(`${Tcnt} ${Fcnt}`);