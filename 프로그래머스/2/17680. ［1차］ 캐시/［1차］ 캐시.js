function solution(cacheSize, cities) {
    let cache = [];
    let answer = 0;
    
    for(let city of cities) {
        city = city.toLowerCase();
        
        let idx = cache.indexOf(city);
        
        if(idx !== -1) {
            answer += 1;
            cache.splice(idx, 1);
        } else{
            answer += 5;
            
            if(cache.length >= cacheSize) {
                cache.shift();
            }
        }
        
        if(cacheSize > 0) {
            cache.push(city);
        }
    }
    return answer;
}