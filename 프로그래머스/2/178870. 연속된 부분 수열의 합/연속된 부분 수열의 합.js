function solution(sequence, k) {
    let left = 0;
    let sum = 0;
    let answer = [];
    let minLength = Infinity;
    
    for(let right=0; right<sequence.length; right++) {
        sum += sequence[right];
        
        while(sum>k) {
            sum -= sequence[left];
            left++;
        }
        
        if(sum === k) {
            if(right-left < minLength) {
                minLength = right-left;
                answer = [left, right];
            }
        }
    }
    return answer;
}