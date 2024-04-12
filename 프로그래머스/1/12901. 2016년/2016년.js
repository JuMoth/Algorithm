function solution(a, b) {
    let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    let totalDays = b;
    for(let i=0; i<a-1; i++) {
        totalDays += days[i];
    }
    return weeks[(totalDays-1)%7];
}

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