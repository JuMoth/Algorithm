const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.trim().split(''));;

const arr = []; 

for(let i=0; i<input.length; i++) {
    arr.push(input[i].length); // arr = [6, 4, 5, 6, 6]
}

const maxNum = Math.max(...arr); // maxNum = 6
let ans = '';

for(let i=0; i<maxNum; i++) { // 6번 반복
    for(let j=0; j<input.length; j++) { // 5번 반복
        if(input[j][i]) { // input[j]마다 길이가 다르기 때문.
            ans += input[j][i];
        }
    }
}

console.log(ans);