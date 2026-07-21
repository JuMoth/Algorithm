function solution(topping) {
    let rightCnt = new Map();
    for(let t of topping) {
        rightCnt.set(t, (rightCnt.get(t) || 0)+1);
    }
    
    let leftSet = new Set();
    let result = 0;
    
    for(let i=0; i<topping.length-1; i++) {
        let t = topping[i];
        
        leftSet.add(t);
        
        rightCnt.set(t, rightCnt.get(t)-1);
        if(rightCnt.get(t) === 0) {
            rightCnt.delete(t);
        }
        
        if(leftSet.size === rightCnt.size) {
            result++;
        }
    }
    return result;
}