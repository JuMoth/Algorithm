function solution(n) {
    let answer = 0;
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (n === i*i) {
            answer = 1;
            break;
        } else {
            answer = 2;
        }
    }
    return answer;
}