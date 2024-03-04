const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const ans = new Array(n).fill(0);

for(let i=1; i<=m; i++) {
    let numbers = input[i].split(' ').map(Number);
    for(let j=numbers[0]-1; j<numbers[1]; j++) {
        ans[j] = numbers[2];
    }
}

console.log(ans.join(' '));