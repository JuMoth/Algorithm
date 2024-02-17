function solution(babbling) {
    let cnt = 0;
    const can = [ "aya", "ye", "woo", "ma"];
    
//     function check(idx, cur) {
//         if(can.includes(cur)) {
//             cnt++;
//         }
        
//         if(idx === babbling.length) {
//             return;
//         }
        
//         check(idx+1, cur);
//         check(idx+1, cur+babbling[idx]);
//     }
    
//     check(0, '');
    for(let i in babbling) {
        let init = babbling[i];
        
        for(let j in can) {
            init = init.replace(can[j], "X");
        }
        
        init = init.replace(/X/gi, "");
        
        if(init.length === 0) {
            cnt += 1;
        }
    }
    
    return cnt;
}