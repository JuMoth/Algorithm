function solution(my_string, is_suffix) {
    let answer = [];
    for(let i=0; i<my_string.length; i++) {
        answer.push(my_string.split('').slice(my_string.length-i-1, my_string.length).join(''));
    }
    if(answer.includes(is_suffix)) {
        return 1;
    } else {
        return 0;
    }
}