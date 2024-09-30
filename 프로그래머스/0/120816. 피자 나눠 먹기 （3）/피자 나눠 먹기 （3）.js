function solution(slice, n) {
    let answer = 0;
    answer = Math.floor((n+(slice-1))/slice);
    return answer;
}