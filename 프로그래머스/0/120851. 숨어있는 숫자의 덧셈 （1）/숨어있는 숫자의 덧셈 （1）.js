function solution(my_string) {
    let answer = 0;
    let num = my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
    for(let i=0; i<num.length; i++) {
        answer += num[i];
    }
    return answer;
}