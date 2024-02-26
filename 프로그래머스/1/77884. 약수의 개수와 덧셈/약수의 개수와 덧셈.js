function solution(left, right) {
    var answer = 0;
    
    function getFactors(num) {
        let factorsLen = 0;
        for(let i=1; i<=num; i++) {
            if(num%i === 0) {
                factorsLen++
            }
        }
        return factorsLen;
    }
    for(let j=left; j<=right; j++) {
        if(getFactors(j)%2===0) {
            answer+=j;
        } else {
            answer-=j;
        }
    }
    return answer;
}