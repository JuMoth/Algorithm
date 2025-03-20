function solution(num, k) {
    let answer = 0;
    if(String(num).includes(k)) {
        answer = String(num).indexOf(k)+1;
    } else {
        answer = -1;
    }
    return answer;
}