const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let basket = new Array(n).fill().map((v, i) => i + 1);
for(let i=1; i<=m; i++) {
    let [a, b] = input[i].split(' ').map(e=>Number(e)-1);
    [basket[a], basket[b]] = [basket[b], basket[a]];
}
console.log(basket.join(" "));