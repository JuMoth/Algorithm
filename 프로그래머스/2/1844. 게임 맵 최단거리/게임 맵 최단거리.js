function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    let dx = [-1, 1, 0,0];
    let dy = [0, 0, -1, 1];
    
    let queue = [[0, 0, 1]];
    maps[0][0] = 0;
    
    while(queue.length>0) {
        let [x, y, dist] = queue.shift();
        
        if(x === n-1 && y === m-1) {
            return dist;
        }
        
        for(let i=0; i<4; i++) {
            let nx = x+dx[i];
            let ny = y+dy[i];
            
            if(nx>=0 && nx<n && ny>=0 && ny<m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, dist+1]);
            }
        }
    }
    return -1;
}