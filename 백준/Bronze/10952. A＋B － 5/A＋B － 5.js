const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=0; ; i++) {
    let ab = input[i].split(' ');
    if(ab[0] == 0 && ab[1] == 0) {
        break;
    }
    console.log(Number(ab[0])+Number(ab[1]));
}