function solution(N, stages) {
    let count = {};
    
    // 각 스테이지에서 멈춘 사람 수 세기
    for (let stage of stages) {
        count[stage] = (count[stage] || 0) + 1;
    }
    
    let reachedUsers = stages.length;
    let failureRates = [];
    
    for(let stage=1; stage<=N; stage++) {
        let failedUsers = count[stage] || 0;
        
        let rate =
            reachedUsers === 0 ? 0 : failedUsers / reachedUsers;
        
        failureRates.push([stage, rate]);
        // 이 스테이지에서 멈춘 사람은 다음 스테이지에 못 감
        reachedUsers -= failedUsers;
    }
    
    failureRates.sort((a, b) => {
        // 실패율 내림차순
        if(b[1] !== a[1]) return b[1] - a[1];
        // 실패율이 같으면 스테이지 번호 오름차순
        return a[0] - b[0];
    });
    
    return failureRates.map(([stage]) => stage);
}