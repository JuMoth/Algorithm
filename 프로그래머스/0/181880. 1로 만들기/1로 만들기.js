function solution(num_list) {
//     let count = 0;

//     for(let i = 0 ; i < num_list.length ; i++) {
//         let num = num_list[i];
//         while(num != 1) {
//             num = num % 2 == 0 ? num /2 : (num - 1) / 2
//             count++;
//         }
//     }
//     return count;
    let answer = 0;
    answer = num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
    return answer;
}