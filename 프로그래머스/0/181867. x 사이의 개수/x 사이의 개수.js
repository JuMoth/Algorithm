function solution(myString) {
    let answer = [];
    let newStr = myString.split("x");
    for(let i=0; i<newStr.length; i++) {
        answer.push(newStr[i].length);
    }
    return answer;
}