function solution(my_string, is_prefix) {
    let answer = [];
    for(let i=0; i<my_string.length; i++) {
        answer.push(my_string.split('').slice(0, i).join(''));
    }
    if(answer.includes(is_prefix)) {
        return 1;
    } else {
        return 0;
    }
}