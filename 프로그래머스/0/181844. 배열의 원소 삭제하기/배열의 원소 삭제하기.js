function solution(arr, delete_list) {
    let answer = [];
    answer = arr.filter(a => !delete_list.includes(a));
    return answer;
}