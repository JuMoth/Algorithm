function solution(my_string) {
    let answer = '';
    let strArr = my_string.split("");
    for(let i=0; i<strArr.length; i++) {
        if(!answer.includes(strArr[i])) {
            answer += strArr[i];
        }
    }
    return answer;
}