const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';

for(let i=1; i<=input[0]; i++) {
    let cnt = Number(input[i].split(' ')[0]);
    let alpha = input[i].split(' ')[1];
    
    for(let j=0; j<alpha.length; j++) {
        for(let k=0; k<cnt; k++) {
            result += alpha[j];
        }
    }
    result += '\n';
}

console.log(result);