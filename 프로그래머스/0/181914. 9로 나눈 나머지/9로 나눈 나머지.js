function solution(number) {
    //console.log([...number]);
    // return [...number].reduce((acc, cur) => acc+Number(cur), 0)%9
    let answer = 0;
    answer = [...number].reduce((acc, cur) => acc+Number(cur), 0)%9;
    return answer;
}