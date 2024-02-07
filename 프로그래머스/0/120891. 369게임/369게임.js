function solution(order) {
    var answer = 0;
    let newArr = String(order).split("");
    for(let i=0; i<newArr.length; i++) {
        if(newArr[i] === "3" || newArr[i] === "6" || newArr[i] === "9") {
            answer++
        }
    }
    return answer;
}