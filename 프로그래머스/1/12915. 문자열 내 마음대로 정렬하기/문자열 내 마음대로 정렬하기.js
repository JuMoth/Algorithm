// function solution(strings, n) {
//     var answer = [];
//     let temp = strings.splice(n, 1)[0];
//     answer = strings.sort();
//     answer.splice(n, 0, temp);
//     return answer;
// }

function solution(strings, n) {
    var sortedStr = strings.sort();
    return sortedStr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}