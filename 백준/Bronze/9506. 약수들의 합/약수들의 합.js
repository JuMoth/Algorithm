const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

// // 마지막에 -1을 제외하기위해 input.length-1
// for(let i=0; i<input.length-1; i++) {
//     let factors = []; // 약수를 담는 배열
//     let num = input[i]; // 6 12 28
//     let ans = '';
//     // 약수를 구하기 위한 반복문
//     for(let j=1; j<num; j++) { // 자신을 제외하기 위해 j<num
//         if(num%j === 0) {
//             factors.push(j);
//         }
//     }
//     let sum=0;
//     // 약수들의 합
//     for(let j of factors) sum+=j;
//     if(num === sum) {
//         ans+=`${num} = `;
//         ans+=factors.join(' + ');
//     } else {
//         ans += num + ' = is NOT perfect.';
//     }
//     console.log(ans);
// }

// 마지막에 -1을 제외하기위해 input.length-1
for(let i=0; i<input.length-1; i++) {
    let factors = []; // 약수를 담는 배열
    let num = input[i]; // 6 12 28
    let sum=0;
    // 약수를 구하기 위한 반복문
    for(let j=1; j<num; j++) { // 자신을 제외하기 위해 j<num
        if(num%j === 0) {
            sum += j;
            factors.push(j);
        }
    }
    if(num === sum) {
        console.log(`${num} = ${factors.join(' + ')}`);
    } else {
        console.log(`${num} is NOT perfect.`)
    }
}