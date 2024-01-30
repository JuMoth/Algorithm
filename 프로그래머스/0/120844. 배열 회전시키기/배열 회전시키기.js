function solution(numbers, direction) {
    var answer = [];
    let temp;
    switch(direction) {
        case "right":
            temp = numbers.pop();
            numbers.unshift(temp);
            break;
        case "left":
            temp = numbers.shift();
            numbers.push(temp);
            break;
    }
    return numbers;
}