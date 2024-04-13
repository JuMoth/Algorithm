function solution(k, score) {
    let Ascore = [];
    let hallOfFame = [];
    
    for(let i=0; i<score.length; i++) {
        if(i<k) hallOfFame.push(score[i]);
        if(score[i]>Math.min(...hallOfFame)) {
            hallOfFame.pop();
            hallOfFame.push(score[i]);
            hallOfFame.sort((a,b)=>b-a);
        }
        Ascore.push(hallOfFame.at(-1));
    }
    
    return Ascore;
}