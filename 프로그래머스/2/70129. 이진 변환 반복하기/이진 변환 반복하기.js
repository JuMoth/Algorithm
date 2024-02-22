function solution(s) {
    let zeroCnt = 0;
    let cnt = 0;
    while(s.length > 1) {
       cnt++;
       let div = 0;
       let answer = s.split("").filter(x => {
            if(x == 0) {
                zeroCnt++;
            } else {
                div++;
            }
        }); 
        s = div.toString(2);
    }

    return [cnt,zeroCnt];
}