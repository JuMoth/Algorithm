function solution(k, m, score) {
    var answer = 0;
    let highScore = score.sort((a, b) => b-a).slice(0, score.length-score.length%m);
    
    for(let i=0; i<highScore.length; i+=m) {
        let box = highScore.slice(i, i+m);
        answer += Math.min(...box)*m;
    }
    return answer;
}