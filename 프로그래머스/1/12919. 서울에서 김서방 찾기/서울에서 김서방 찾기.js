function solution(seoul) {
    var answer = '';
    let pos = 0;
    for(let i of seoul) {
        if(i === "Kim") {
            pos = seoul.indexOf(i);
        }
    }
    return `김서방은 ${pos}에 있다`;
}