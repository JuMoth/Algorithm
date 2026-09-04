function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc+cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc+cur, 0);
    let target = (sum1+sum2)/2;
    
    if((sum1+sum2)%2 !== 0) return -1;
    
    let combined = [...queue1, ...queue2];
    let p1 = 0;
    let p2 = queue1.length;
    let maxOps = queue1.length*3;
    let count = 0;
    
    while(count<=maxOps) {
        if(sum1===target) return count;
        
        if(sum1>target) {
            sum1 -= combined[p1];
            p1 = (p1+1)%combined.length;
        } else {
            sum1 += combined[p2];
            p2 = (p2+1)%combined.length;
        }
        count++;
    }
    return -1;
}