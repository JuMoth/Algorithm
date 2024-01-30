function solution(rsp) {
    var answer = '';
    let rspArr = rsp.split("");
    for(let i=0; i<rspArr.length; i++) {
        if(rsp[i] === "2") {
            answer += "0";
        } else if(rsp[i] === "0") {
            answer += "5";
        } else if(rsp[i] === "5") {
            answer += "2";
        }
    }
    return answer;
}