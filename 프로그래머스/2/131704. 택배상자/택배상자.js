function solution(order) {
    let stack = [];
    let answer = 0;
    let cur = 1;
    
    for(let target of order) {
        while(cur<=order.length && cur<target) {
            stack.push(cur);
            cur++;
        }
        
        if(cur === target) {
            cur++;
            answer++;
        } else if(stack.length && stack[stack.length-1] === target) {
            stack.pop();
            answer++;
        } else {
            break;
        }
    }
    return answer;
}