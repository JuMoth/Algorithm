function solution(num_list) {
    var answer = [];
    for(let nums of num_list) {
        answer.unshift(nums);
    }
    return answer;
}