function solution(A,B){
    var answer = 0;
    
    let minA = A.sort((a,b)=>a-b);
    let maxB = B.sort((a,b)=>b-a);
    
    for(let i=0; i<A.length; i++) {
        answer += A[i]*B[i];
    }

    return answer;
}