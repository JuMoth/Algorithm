function solution(number, k) {
    let answer = [];
    
    for(let digit of number) {
        while(k>0 && answer.length>0 && answer[answer.length-1]<digit) {
            answer.pop();
            k--;
        }
        answer.push(digit);
    }
    return answer.slice(0, answer.length-k).join("");
}