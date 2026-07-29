function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => ({
        priority,
        idx
    }));
    
    let order = 0;
    
    while(queue.length) {
        let cur = queue.shift();
        
        if(queue.some(process => process.priority > cur.priority)) {
            queue.push(cur);
        } else {
            order++;
            
            if(cur.idx === location) {
                return order;
            }
        }
    }
}