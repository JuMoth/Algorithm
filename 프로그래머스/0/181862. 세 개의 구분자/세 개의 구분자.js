function solution(myStr) {
    let answer = myStr.split(/[a|b|c]/).filter(x => x);
    return answer.length ? answer : ["EMPTY"];
}
