function solution(n) {
    let i = 1;

    while (factorial(i) <= n) {
        i++;
    }

    return i - 1;
}

function factorial(num) {
    let answer = 0;
    if (num <= 1) {
        answer = 1;
    } else {
        answer = num * factorial(num - 1);
    }
    
    return answer;
}