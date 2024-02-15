function solution(polynomial) {
    let answer = [];
    const arrPol = polynomial.split(" + ");
    
    let xCnt = 0;
    let numCnt = 0;
    
    arrPol.forEach(el => {
        if(el.includes("x")) {
            const strVal = el.replace("x", "") || "1";
            
            xCnt += parseInt(strVal, 10);
        } else {
            numCnt += parseInt(el);
        }
    });
    
    if(xCnt) {
        answer.push(`${xCnt === 1 ? "" : xCnt}x`);
    }
    if(numCnt) {
        answer.push(numCnt);
    }
    
    return answer.join(" + ");
}