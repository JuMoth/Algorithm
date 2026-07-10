function solution(clothes) {
    let clothesObj = {};
    for(let i=0; i<clothes.length; i++) {
        let type = clothes[i][1];
        
        if(clothesObj[type] === undefined) {
            clothesObj[type] = 1;
        } else {
            clothesObj[type]++;
        }
    }
    
    let result = 1;
    
    for(let cnt of Object.values(clothesObj)) {
        result *= cnt+1;
    }
    return result-1;
}