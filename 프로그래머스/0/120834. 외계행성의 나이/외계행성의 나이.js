function solution(age) {
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    
    let answer = '';
    
    const nums = String(age).split("");
    for(let i of nums) {
        answer += alpha[Number(i)];
    }
    
    return answer;
}