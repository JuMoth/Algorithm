function solution(str1, str2) {
    let answer = '';
    let arra = str1.split('');
    let arrb = str2.split('');
    for(let i=0; i<arra.length; i++) {
        answer += arra[i] + arrb[i];
    }
    return answer;
}