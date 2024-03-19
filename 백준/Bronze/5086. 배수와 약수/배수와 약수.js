const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function multiples(num1, num2) {
    if(num1%num2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factors(num1, num2) {
    if(num2%num1 === 0) {
        return true;
    } else {
        return false;
    }
}

for(let i=0; i<input.length-1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    if(multiples(a, b)) {
        console.log("multiple");
    } else if(factors(a, b)) {
        console.log("factor")
    } else {
        console.log("neither");
    }    
}