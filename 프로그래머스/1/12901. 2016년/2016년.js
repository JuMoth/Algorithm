// 1월 1일 FRI
// 5월 24일 TUE
// 31 29 31 30 31 30 31 31 30 31 30 31
// const weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WEN', 'THU'];
// const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// function solution(a, b) {
//     let totalDays = b;
//     for(let i=1; i<a; i++) {
//         totalDays += days[i];
//     }
//     return weeks[(totalDays-1)%7];
// }

// const weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WEN', 'THU'];

// function solution(a, b) {
//     let totalDays = b;
//     for(let i=1; i<a; i++) {
//         if(i === 2) totalDays+=29;
//         else {
//             if(i <= 7) {
//                 totalDays += i%2 === 1?31:30;
//             } else {
//                 totalDays += i%2 === 1?30:31;
//             }
//         }
//     }
    
// }

function solution(a, b) {
    var answer = '';
    // 1)
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 2)
    let day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let numCount = 0; 
    let index = 0;

    // 3)
    for(let i=0; i<a-1; i++) {
        numCount += date[i]
    }
    // 3)
    numCount += b;

    // 4)
    index = (numCount - 1) % 7; // 1월 1일이 포함되므로 1을 뺀 후, 배열의 길이로 나눈 나머지를 구함
    // 5)
    answer = day[index];

    return answer;
}