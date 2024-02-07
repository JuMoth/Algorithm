function solution(sides) {
    var answer = 0;
    let numArr = sides.sort((a, b) => a-b);
    console.log(numArr);
    if(numArr[2]< numArr[0]+numArr[1]) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}