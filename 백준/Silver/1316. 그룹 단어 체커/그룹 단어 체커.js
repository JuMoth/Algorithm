const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let cnt = N;
for(let i=1; i<=N; i++) {
    let word = input[i];
    for(let j=0; j<word.length-1; j++) {
        if(word[j] !== word[j+1] && word.slice(j+1).includes(word[j])) {
            cnt--;
            break;
        }
    }
}

console.log(cnt);