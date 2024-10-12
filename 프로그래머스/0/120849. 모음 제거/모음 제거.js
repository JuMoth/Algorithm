function solution(my_string) {
    let answer = '';
    answer = my_string.replace(/[aeiou]/gi, '');
    return answer;
}