function solution(n) {
    let answer = "";
    
    while(n>0) {
        n--;
        
        let remainder = n%3;
        answer = ["1", "2", "4"][remainder] + answer;
        
        n = Math.floor(n/3);
    }
    return answer;
}