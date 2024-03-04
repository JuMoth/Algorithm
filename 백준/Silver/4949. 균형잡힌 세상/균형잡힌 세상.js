const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const open = ["(", "["];
const closed = [")", "]"];
let stack;
const ans = [];

input.slice(0, input.length-1).forEach(v => {
    let isNo = false;
    stack = [];
    for(let i =0; i<v.length; i++) {
        if(open.includes(v[i])) stack.push(v[i]);
        else if(closed.includes(v[i])) {
            if (stack.pop() !== open[closed.indexOf(v[i])]) {
                ans.push("no");
                isNo = true;
                break;
            }
        }
    }
    if(!isNo) {
        if(stack.length === 0) ans.push("yes");
        else ans.push("no");
    }
})

console.log(ans.join("\n"));