function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    let cnt = 0;
    
    function dfs(current) {
        if(current === word) return true;
        if(current.length === 5) return false;
        
        for(let vowel of vowels) {
            cnt++;
            if(dfs(current+vowel)) return true;
        }
        return false
    }
    dfs("");
    return cnt;
}