const fs = require("fs");
let [h, w] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let b = Math.floor((10000*w)/(h*h));
if(b>=25) {
    console.log(b);
    console.log("Obesity");
} else {
    console.log(b);
}