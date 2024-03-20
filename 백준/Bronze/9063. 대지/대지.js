const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const N = Number(input[0]);
let X = [];
let Y = [];
for(let i=1; i<=N; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    X.push(x);
    Y.push(y);
}
X.sort((a,b)=>a-b);
Y.sort((a,b)=>a-b);
let width = 0;
let height = 0;
width = X[X.length-1]-X[0];
height = Y[Y.length-1]-Y[0];
console.log(width*height);