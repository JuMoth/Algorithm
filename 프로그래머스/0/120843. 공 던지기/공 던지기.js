function solution(numbers, k) {
    // numbers의 길이 범위만큼 배열을 만들어두기
    // for(let i=0; i<100; i++) {
    //     numbers.push(numbers[i%numbers.length]);
    // }
    let ball = 1;
    for(let i = 0 ; i < k-1 ; i ++) {
        ball += 2;
        if(ball > numbers.length) {
            ball-=numbers.length;
        }
    }
    return ball;
}