const fs = require("fs");
let [gen, age] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if(gen === 0) {
    if(age >= 19) {
        console.log("MAN");
    } else {
        console.log("BOY");
    }
} else {
    if(age >= 19) {
        console.log("WOMAN");
    } else {
        console.log("GIRL");
    }
}