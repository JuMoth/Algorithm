function solution(my_string, n) {
    let answer = '';
    answer += my_string.split('').slice(0, n).join('');
    return answer;
}