const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let basket = new Array(n).fill().map((v, i)=> i+1);

for(let i=1; i<=m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    let temp = [];
    for(let j=a-1; j<b; j++) {
        temp.push(basket[j]);
    }
    temp.reverse();
    basket.splice(a-1, temp.length, ...temp);
}

console.log(basket.join(" "));