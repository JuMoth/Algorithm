function solution(number) {
    let cnt = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = 1; j < number.length; j++) {
            for (let k = 1; k < number.length; k++) {        
                const val = number[i] + number[i + j] + number[k + i + j];
                if (isNaN(val)) {
                    continue;
                }
                if(!val) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
}