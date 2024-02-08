function solution(my_string) {
    let el = my_string.split(" ");
    let answer = Number(el[0]);
    
    el.forEach((item, idx) => {
        if(item === "+") {
            answer += Number(el[idx + 1]);
        }
        if(item === "-") {
            answer -= Number(el[idx + 1]);
        }
    })
     
    return answer;
}