function solution(array, height) {
    var answer = 0;
    for(let num of array) if(num>height) answer++
    return answer;
}