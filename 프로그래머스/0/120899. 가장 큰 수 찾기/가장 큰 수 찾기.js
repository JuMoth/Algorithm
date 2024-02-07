function solution(array) {
    var answer = [];
    let a = array.reduce((acc, cur)=>acc>cur?acc:cur, 0);
    let b = array.indexOf(a);
    answer.push(a, b);
    return answer;
}