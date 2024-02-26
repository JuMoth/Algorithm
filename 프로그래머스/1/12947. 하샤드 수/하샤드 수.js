function solution(x) {
    let sum=0;
    let strArr = String(x).split("");
    for(let i of strArr) sum+=Number(i);
    return x%sum===0?true:false;
}