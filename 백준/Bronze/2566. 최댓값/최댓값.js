const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(x => x
         .trim()
         .split(' ')
         .map(Number)
        );

let maxNum = 0;
let x = 0;
let y = 0;

for(let i=0; i<9; i++) {
    for(let j=0; j<9; j++) {
        if(maxNum <= input[i][j]) {
            maxNum = input[i][j];
            x = j+1;
            y = i+1;
        }
    }
}
console.log(maxNum);
console.log(`${y} ${x}`);