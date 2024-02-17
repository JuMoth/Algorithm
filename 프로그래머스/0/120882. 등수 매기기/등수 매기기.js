function solution(score) {
    let avg = score.map(el => (el[0]+el[1])/2);
    let sorted = avg.slice().sort((a,b) => b-a);
    
    return avg.map(v => sorted.indexOf(v)+1);
}