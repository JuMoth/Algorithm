function solution(k, tangerine) {
    const obj = {};
    
    tangerine.forEach((n) => {
        obj[n] = obj[n]+1 || 1;
    });
    
    const kind = Object.values(obj).sort((a, b) => b-a);
    let sum=0;
    let ans=0;
    
    for(let num of kind) {
        ans++;
        sum += num;
        
        if(sum >= k) break;
    }
    
    return ans;
}