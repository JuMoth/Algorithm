function solution(num_list) {
    var answer = [0, 0];
    for(let nums of num_list) {
        if(nums%2 === 0) {
            answer[0]++;
        } else {
            answer[1]++;
        }
    }
    return answer;
}