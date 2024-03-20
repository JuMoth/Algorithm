let [a, b, c] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number)
    .sort((a,b)=>a-b);

if(c >= a+b) {
    c = a+b-1;
    console.log(a+b+c);
} else {
    console.log(a+b+c);
}