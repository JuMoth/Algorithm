function solution(num_str) {
    let answer = 0;
    answer = num_str.split("").reduce((acc, cur) => Number(acc)+Number(cur));
    return answer;
}