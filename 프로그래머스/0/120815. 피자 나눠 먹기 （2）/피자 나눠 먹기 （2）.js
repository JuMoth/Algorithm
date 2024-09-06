function solution(n) {
    let answer = 1;
    for(let i=6; ; i+=6) {
        if(i%n !== 0) {
            answer++;
        } else {
            break;
        }
    }
    return answer;
}