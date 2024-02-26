function solution(num) {
    var ans = num;
    for(let i=0; i<510; i++) {
        if(ans === 1) {
            return i;
            break;
        }
        if(ans%2 === 0) {
            ans /= 2;
        } else {
            ans = ans*3+1;
        }
        if(i === 500) {
            return -1;
            break;
        }
    }
}