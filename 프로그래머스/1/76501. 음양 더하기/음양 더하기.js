function solution(absolutes, signs) {
    let result = 0;
    for(let i=0; i<signs.length; i++) {
        if(signs[i] === true) {
            absolutes[i] = Math.abs(absolutes[i]);
        } else {
            absolutes[i] = absolutes[i]*-1;
        }
    }
    for(let j of absolutes) {
        result += j;
    }
    return result;
}