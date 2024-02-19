function solution(num, total) {
    function getFirstNum(num, total) {
        // num이 짝수인 경우
        if(num % 2 === 0){
            return Math.ceil(total / num) - (num / 2);
        }
        // num이 홀수인 경우
        else{
            return total / num - Math.floor(num / 2);
        }
    }
    let firstNum = getFirstNum(num,total);
    let answer = Array(num).fill(firstNum).map((v,idx)=>v+idx);
    return answer;
}