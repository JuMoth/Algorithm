let input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, 'a').length);

// const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
// 
// let cnt = 0;
// for(let i = 0; i < input.length; i++) {
//     let temp = input[i] + (input[i+1] || '') + (input[i+2] || '');
//     if(croatia.includes(temp)) {
//         cnt += temp.length;
//         i += 2;
//     } else if (croatia.includes(input[i])) {
//         cnt++;
//     }
// }
// console.log(cnt);