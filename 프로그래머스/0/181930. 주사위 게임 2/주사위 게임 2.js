function solution(a, b, c) {
    let answer = 0;
    if(a!==b && b!==c && c!==a) {
        answer += a+b+c;
    } else if(a*a!==b*c || b*b!==a*c || c*c!==a*b) {
        answer += (a + b + c) * (a*a + b*b + c*c);
    } else if(a===b && b===c && c===a) {
        answer += (a + b + c) * (a*a + b*b + c*c ) * (a*a*a + b*b*b + c*c*c );
    }
    console.log(answer);
    return answer;
}