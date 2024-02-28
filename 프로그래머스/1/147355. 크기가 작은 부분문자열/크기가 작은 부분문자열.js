function solution(t, p) {
    var answer = 0;
    t = t.split("");
    let strArr = [];
    for(let i=0; i<t.length; i++) {
        strArr.push([...t].splice(i, p.length).join(""));
    }
    
    for(let j of strArr) {
        if(j.length === p.length) {
            if(Number(j)<=Number(p)) {
                answer++;
            }
        }
    }
    
    return answer;
}