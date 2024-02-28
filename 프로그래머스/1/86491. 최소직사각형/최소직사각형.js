function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    for(let i of sizes) {
        i.sort((a,b)=>b-a);
        for(let j=0; j<i.length; j++) {
            if(j===0) {
                width.push(i[j]);
            } else {
                height.push(i[j]);
            }
        }
    }
    
    width.sort((a,b)=>b-a);
    height.sort((a,b)=>b-a);
    
    return width[0]*height[0];
}