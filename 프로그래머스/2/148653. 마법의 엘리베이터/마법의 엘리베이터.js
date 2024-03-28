function solution(storey) {
    let ans = 0;
    
    while(storey) {
        let cur = storey % 10;
        let next = (storey / 10) % 10;
        
        if(cur > 5) {
            ans += 10 - cur;
            storey += 10;
        } else if(cur < 5) {
            ans += cur;
        } else {
            ans += cur;
            storey += next >= 5 ? 10 : 0;
        }
        storey = parseInt(storey / 10);
    }
    return ans;
}