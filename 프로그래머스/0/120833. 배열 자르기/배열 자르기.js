function solution(numbers, num1, num2) {
    let answer = 0;
    answer = numbers.slice(num1, num2+1);
    return answer;
}