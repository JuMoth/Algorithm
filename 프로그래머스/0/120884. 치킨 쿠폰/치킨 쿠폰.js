function solution(chicken) {
    for(let i=1; i<=chicken; i++) {
       if(i%10 === 0) {
           chicken += 1;
       } 
    }
    let answer = Math.floor(chicken/10);
    
    return answer;
}