function solution(array, n) {
    // let answer = Math.abs(n-array[0]);
    // for(let i=0; i<array.length; i++) {
    //     if(Math.abs(n-array[i])<answer) {
    //         answer = array[i];
    //     }
    // }
    // return answer;
    
    array.sort((a, b) => a-b);
    let a = 0;
    let b = 0;
    let answer = [];

    for (let i = 0; i < array.length; i++) {
        answer.push(Math.abs(n-array[i]));
        a = Math.min(...answer);
        b = answer.indexOf(a);
    }
    return array[b];
}