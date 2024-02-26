function solution(n)
{
    let ans = 0;
    let m = String(n).split("");
    for(let i of m) ans+=Number(i);
    return ans;
}