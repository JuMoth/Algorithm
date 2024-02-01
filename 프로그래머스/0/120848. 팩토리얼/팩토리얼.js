function solution(n) {
    let i = 1;

    while (factorial(i) <= n) {
        i++;
    }

    return i - 1;
}

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}