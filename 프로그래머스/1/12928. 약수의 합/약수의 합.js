function solution(n) {
    let ans =0;
    let numArr = [];
    for(let i=1; i<=n; i++) {
        if(n%i===0) {
            numArr.push(i);
        }
    }
    
    for(let j of numArr) ans+=j;
    return ans;
}