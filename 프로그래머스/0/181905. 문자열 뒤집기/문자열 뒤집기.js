function solution(my_string, s, e) {
    let answer = '';
    let cutStr = '';
    let befStr = '';
    let aftStr = '';
    befStr = my_string.split('').slice(0, s).join('');
    cutStr = my_string.split('').slice(s, e+1).reverse().join('');
    aftStr = my_string.split('').slice(e+1, my_string.length).join('');
    answer += befStr + cutStr + aftStr;
    return answer;
}