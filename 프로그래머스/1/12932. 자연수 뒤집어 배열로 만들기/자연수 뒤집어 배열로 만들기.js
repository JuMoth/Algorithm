function solution(n) {
    const answer = String(n).split('').map(el=>Number(el)).reverse()
    return answer;
}