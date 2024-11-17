function solution(num_list) {
    let answer = [];
    answer = num_list.sort((a, b) => a-b).slice(5, num_list.length+1);
    return answer;
}