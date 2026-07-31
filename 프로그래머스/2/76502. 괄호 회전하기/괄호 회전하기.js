function isValid(str) {
    let stack = [];
    let pair = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    
    for(let char of str) {
        if(char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if(stack.length === 0 || stack[stack.length-1] !== pair[char]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    let len = s.length;
    
    if(len%2 !== 0) return 0;
    
    for(let j=0; j<len; j++) {
        let rotated = s.slice(j) + s.slice(0, j);
        
        if(isValid(rotated)) {
            answer++;
        }
    }
    return answer;
}