const input = require('fs').readFileSync('/dev/stdin').toString();

let cnt = Number(input);

for(let i=1; i<cnt; i++) {
    let blank = ' '.repeat(cnt-i);
    let star = '*'.repeat(i+i-1);
    console.log(blank+star);
}

for(let j=cnt; j>0; j--) {
    let blank = ' '.repeat(cnt-j);
    let star = '*'.repeat(j+j-1);
    console.log(blank+star);
}