const [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
// const [A, B, V] = [2, 1, 5];
// let pos = 0;
// let day = 0;

// while(true) {
//     if(pos<V) {
//         pos += A;
//         if(pos === V || pos > V) {
//             day++
//             break;
//         } else {
//             pos -= B;
//         }
//         day++
//     } else {
//         break;
//     }
// }
// console.log(day);
// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil((V-B)/(A-B)));