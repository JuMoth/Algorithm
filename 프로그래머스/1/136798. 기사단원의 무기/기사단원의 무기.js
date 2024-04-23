function getFactor(num) {
    let factorLen = 0;
    const sqrtNum = Math.sqrt(num);
    for(let i = 1; i <= sqrtNum; i++) {
        if(num % i === 0) {
            factorLen++;
            if(i !== num / i) {
                factorLen++;
            }
        }
    }
    return factorLen;
}

function solution(number, limit, power) {
    let factorsLen = [];
    for(let i=1; i<=number; i++) {
        getFactor(i)>limit?factorsLen.push(power):factorsLen.push(getFactor(i));
    }
    return factorsLen.reduce((acc, cur) => acc+cur, 0);
}