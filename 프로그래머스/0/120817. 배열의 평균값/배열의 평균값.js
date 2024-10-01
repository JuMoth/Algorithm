function solution(numbers) {
    var answer = 0;
    
    return answer = numbers.reduce((acc, cur) => {
        return acc + cur;
    })/numbers.length;
}