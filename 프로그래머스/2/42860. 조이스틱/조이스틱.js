function solution(name) {
    let n = name.length;
    let answer = 0;
    
    for(let char of name) {
        let num = char.charCodeAt(0)-65;
        answer += Math.min(num, 26-num);
    }
    
    let move = n-1;
    
    for(let i=0; i<n; i++) {
        let next = i+1;
        
        while(next<n && name[next] === 'A') {
            next++;
        }
        
        move = Math.min(move, i+n-next+Math.min(i, n-next));
    }
    return answer+move;
}