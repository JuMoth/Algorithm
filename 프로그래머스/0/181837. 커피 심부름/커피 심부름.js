function solution(order) {
    let answer = '';
    answer = order.reduce((acc, cur) => acc + (cur.includes('tte') ? 5000 : 4500), 0);
    return answer;
}