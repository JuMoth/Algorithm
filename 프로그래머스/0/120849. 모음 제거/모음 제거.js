function solution(my_string) {
    let answer = my_string.replace(/[aeiou]/gi, '');
    return answer;
}