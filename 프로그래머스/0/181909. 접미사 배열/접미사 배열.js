function solution(my_string) {
    let answer = [];
    for(let i=0; i<my_string.length; i++) {
        answer.push(my_string.split('').slice(my_string.length-i-1, my_string.length).join(''));
    }
    answer.sort();
    return answer;
}