function solution(citations) {
    citations.sort((a, b) => b-a);
    
    for(let i=0; i<citations.length; i++) {
        let rank = i+1;
        
        if(citations[i]<rank) {
            return i;
        }
    }
    return citations.length;
}