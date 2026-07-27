function solution(n, k) {
    let nums = Array.from({ length: n }, (_, i) => i+1);
    let answer = [];
    
    for(let remain=n; remain>=1; remain--) {
        let fact = 1;
        for(let i=1; i<remain; i++) fact *= i;
        
        let idx = Math.floor((k-1)/fact);
        answer.push(nums.splice(idx, 1)[0]);
        
        k = (k-1)%fact+1;
    }
    return answer
}