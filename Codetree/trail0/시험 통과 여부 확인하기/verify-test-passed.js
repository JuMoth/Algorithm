const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

if(Number(input)>=80){
    console.log("pass");
} else{
    console.log(`${80-Number(input)} more score`);
}