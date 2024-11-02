function solution(picture, k) {
    let answer = [];
    picture.forEach(e => {
        let str = [...e].map(e => e.repeat(k)).join('');
        for(let i=0; i<k; i++) {
            answer.push(str);
        }
    });
    
    return answer;
}