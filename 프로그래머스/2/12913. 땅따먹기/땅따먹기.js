function solution(land) {
    let dp = [...land[0]];
    
    for(let i=1; i<land.length; i++) {
        let next = Array(4);
        
        for(let col=0; col<4; col++) {
            let best = 0;
            
            for(let prev=0; prev<4; prev++) {
                if(prev !== col) {
                    best = Math.max(best, dp[prev]);
                }
            }
            next[col] = best+land[i][col];
        }
        dp = next;
    }
    return Math.max(...dp);
}