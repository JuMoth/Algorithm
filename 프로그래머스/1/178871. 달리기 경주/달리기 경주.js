function solution(players, callings) {
    let rank = new Map();
    
    players.forEach((name, idx) => {
        rank.set(name, idx);
    });
    
    for(let name of callings) {
        let curIdx = rank.get(name);
        let frontName = players[curIdx-1];
        
        players[curIdx-1] = name;
        players[curIdx] = frontName;
        
        rank.set(name, curIdx-1);
        rank.set(frontName, curIdx);
    }
    return players;
}