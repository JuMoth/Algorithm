function solution(date1, date2) {
    let answer = 0;
    answer = new Date(date1)<new Date(date2)?1:0;
    return answer;
}