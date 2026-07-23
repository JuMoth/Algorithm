function solution(numbers) {
    let answer = new Set();
    
    function dfs(current, remaining) {
        if(current.length>0) {
            answer.add(Number(current));
        }
        
        for(let i=0; i<remaining.length; i++) {
            dfs(current+remaining[i], remaining.slice(0, i)+remaining.slice(i+1));
        }
    }
    
    dfs("", numbers);

    function isPrime(n) {
        if(n<2) return false;
        
        for(let i=2; i*i<=n; i++) {
            if(n%i === 0) return false;
        }
        return true;
    }
    return [...answer].filter(n => isPrime(n)).length;
}


