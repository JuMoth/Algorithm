function solution(arr, flag) {
    let answer = [];
    for(let i=0; i<arr.length; i++) {
        if(flag[i] === true) {
            for(let j=0; j<arr[i]*2; j++) {
                answer.push(arr[i]);
            }
        } else if(flag[i] === false) {
            for(let q=0; q<arr[i]; q++) {
                answer.pop();
            }
        }
    }
    return answer;
}