function solution(i, j, k) {
    var answer = 0;
    for(let a=i; a<=j; a++) {
        for(let b of String(a)) {
            if(String(b).includes(k)) {
                answer++;
            }
        }
    }
    return answer;
}