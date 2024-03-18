const [T, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const solution = (money) => {
    let cnt = new Array(4).fill(0);
    const coin = [25, 10, 5, 1];
    for(let i=0; i<cnt.length; i++) {
        cnt[i] += Math.floor(money/coin[i]);
        money = money%coin[i];
    }
    return cnt.join(' ');
}

for(let i=0; i<T; i++) {
    console.log(solution(numbers[i]));
}