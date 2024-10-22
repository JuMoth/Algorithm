function solution(array) {
    let answer = 0;
    for(let i of array) {
        for(let j of String(i).split("")) {
            if(j.includes("7")) {
                answer ++
            }
        }
    }
    return answer;
}