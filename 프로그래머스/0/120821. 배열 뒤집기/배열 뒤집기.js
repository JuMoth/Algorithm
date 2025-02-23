function solution(num_list) {
    let answer = [];
    for(let nums of num_list) {
        answer.unshift(nums);
    }
    return answer;
}