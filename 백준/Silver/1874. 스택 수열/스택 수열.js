const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...nums] = input;
const numbers = nums.map(Number);

function solution(n, numbers) {
    let stack = [];
    let ans = '';
    let cnt = 1;
    
    for(let i=0; i<n; i++) {
        const number = numbers.shift();
    
        while(cnt <= number) {
            stack.push(cnt++);
            ans += "+ ";
        }
    
        const popedItem = stack.pop();
        if(popedItem !== number) {
            return 'NO';
        }
        ans += '- ';
    }
    return ans.split(' ').join('\n');
}

const ans = solution(n, numbers);
console.log(ans);


