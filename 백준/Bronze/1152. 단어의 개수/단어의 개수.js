const input = require('fs').readFileSync('/dev/stdin').toString();

let strArr = input.trim().split(' ');
let cnt = 0;

for(let i=0; i<strArr.length; i++) {
    if(strArr[i] !== '') {
        cnt++;
    }
}
console.log(cnt);