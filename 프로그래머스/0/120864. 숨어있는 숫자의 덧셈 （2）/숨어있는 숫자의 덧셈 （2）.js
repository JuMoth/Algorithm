function solution(my_string) {
    var answer = 0;
    let numArr = my_string.match(/\d+/g);
    if (numArr !== null) {
       for(let num of numArr) answer += Number(num);
    }
    return answer;
}