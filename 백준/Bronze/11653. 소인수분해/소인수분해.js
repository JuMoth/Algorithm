const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim();
const N = Number(input);

function primeFactors(n) {
    const factors = [];
    
    while (n % 2 === 0) {
        factors.push(2);
        n = Math.floor(n / 2);
    }
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }
    
    if (n > 2) {
        factors.push(n);
    }
    return factors;
}

console.log(primeFactors(N).join('\n'));