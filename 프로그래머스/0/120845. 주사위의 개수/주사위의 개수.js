function solution(box, n) {
    let answer = 1;
    for(let num of box) {
        answer = answer*Math.floor(num/n);
    }
    return answer;
}