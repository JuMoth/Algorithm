function solution(my_string, n) {
    let answer = '';
    answer += my_string.split('').slice(my_string.length-n, my_string.length).join('');
    return answer;
}