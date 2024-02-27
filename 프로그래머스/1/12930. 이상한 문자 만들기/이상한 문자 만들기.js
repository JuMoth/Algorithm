function solution(s) {
    let answer = '';
    let words = s.split(" ");

    for(let i=0; i<words.length; i++) {
        let word = words[i];
        let modifiedWord = '';

        for(let j=0; j<word.length; j++) {
            if(j%2===0) {
                modifiedWord += word[j].toUpperCase();
            } else {
                modifiedWord += word[j].toLowerCase();
            }
        }
        
        if(i !== words.length-1) {
            answer += modifiedWord + ' ';
        } else {
            answer += modifiedWord;
        }
    }
    return answer;
}