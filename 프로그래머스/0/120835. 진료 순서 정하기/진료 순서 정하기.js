function solution(emergency) {
    let answer = new Array(emergency.length).fill(0);
    
    for(let i=0; i<emergency.length; i++) {
        for(let j=0; j<emergency.length; j++) {
            if(emergency[i]<emergency[j]) {
                answer[i]++;
            }
        }
        answer[i]++;
    }
    
    return answer;
}