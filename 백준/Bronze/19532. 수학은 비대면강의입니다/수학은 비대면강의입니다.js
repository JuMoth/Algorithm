let [a, b, c, d, e, f] = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

// const x = (c * e - b * f) / (a * e - b * d);
// const y = (c * d - a * f) / (b * d - a * e);
// 
// console.log(`${x} ${y}`);

for(let i=-999; i<=999; i++) {
    for(let j=-999; j<=999; j++) {
        if(a*i + b*j === c && d*i + e*j === f) {
            console.log(`${i} ${j}`);
            break;
        }
    }
}