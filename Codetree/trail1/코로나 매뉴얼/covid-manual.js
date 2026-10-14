const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;

for(let person of input) {
    let [cold, temp] = person.split(" ");

    if(cold === "Y") {
        if(Number(temp) >= 37) {
            cnt++;
        }
    }
}

if(cnt >= 2) {
    console.log("E");
} else {
    console.log("N");
}