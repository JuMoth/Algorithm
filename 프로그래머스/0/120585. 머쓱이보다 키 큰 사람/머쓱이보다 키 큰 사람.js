function solution(array, height) {
    let answer = 0;
    for(let num of array) if(num>height) answer++;
    return answer;
}