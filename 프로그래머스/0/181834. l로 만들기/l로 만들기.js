function solution(myString) {
    let answer = '';
    answer = myString.split('').map((v)=>v < 'l' ? 'l' : v).join('');
    return answer;
}