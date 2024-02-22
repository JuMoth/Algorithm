function solution(n) {
    var answer = 0;
    
    function getOneLen(num) {
        return num.toString(2).replaceAll(0, "").length;
    }
    
    let i=n+1;
    while(true) {
        if(getOneLen(n) === getOneLen(i)) {
            answer = i;
            break;
        } else {
            i++   
        }
    }
    
    return answer;
}