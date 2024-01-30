function solution(balls, share) {
    let bunMo = [];
    let bunJa = [];
    let result = 0;
    for(let i=balls; i<balls+share; i++) {
        bunMo.push(i - share+1)
    }
    for(let i=1; i<=share; i++) {
        bunJa.push(i)
    }
    result = bunMo.reduce((acc, cur) => acc*cur, 1)/
        bunJa.reduce((acc, cur) => acc*cur, 1)

    return Math.floor(result);
}