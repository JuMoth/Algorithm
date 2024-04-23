function solution(lottos, win_nums) {
    let winCnt = 0;
    let zeroCnt = 0;
    
    for(let lNum of lottos) {
        if(lNum === 0) zeroCnt++;
        else {
            for(let wNum of win_nums) {
                if(lNum === wNum) {
                    winCnt++;
                    break;
                }
            }
        }
    }
    let min = winCnt;
    let max = winCnt+zeroCnt;
    let answer = [Math.min(7-max, 6), Math.min(7-min, 6)];
    return answer;
}