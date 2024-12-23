function solution(q, r, code) {
    let answer = [];
    let cutCode = code.split('');
    for(let i=0; i<cutCode.length; i++) {
        if(i%q === r) {
            answer.push(cutCode[i]);
        }
    }
    return answer.join('');
}