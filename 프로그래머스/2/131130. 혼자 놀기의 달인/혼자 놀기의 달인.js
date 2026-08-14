function solution(cards) {
    let visited = Array(cards.length).fill(false);
    let groups = [];
    
    for(let i=0; i<cards.length; i++) {
        if(visited[i]) continue;
        
        let count = 0;
        let cur = i;
        
        while(!visited[cur]) {
            visited[cur] = true;
            count++;
            cur = cards[cur]-1;
        }
        groups.push(count);
    }
    groups.sort((a, b) => b-a);
    return groups.length === 1 ? 0 : groups[0]*groups[1];
}