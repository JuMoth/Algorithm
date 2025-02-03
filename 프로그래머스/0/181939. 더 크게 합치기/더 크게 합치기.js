function solution(a, b) {
    let answer = 0;
    if(String(a)+String(b) > String(b)+String(a)) {
        answer += Number(String(a)+String(b));
    } else {
        answer += Number(String(b)+String(a));
    }
    return answer;
}