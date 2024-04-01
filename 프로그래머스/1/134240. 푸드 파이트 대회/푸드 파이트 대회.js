function solution(food) {
    var answer = '';
    let result = '';
    for(let i=1; i<food.length; i++) {
        if(food[i]/2 < 1) continue;
        else {
            for(let j=0; j<Math.floor(food[i]/2); j++) {
                result += String(i);
            }
        }
    }
    let reverse = result.split('').reverse().join('');
    answer += result + 0 + reverse;
    return answer;
}