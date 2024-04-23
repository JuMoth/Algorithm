function solution(babbling) {
    let canSay = ["aya", "ye", "woo", "ma"];
    var answer = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < canSay.length; j++){
            // 연속 2번 나오면 break
            if(babble.includes(canSay[j].repeat(2))){
                break;
            }
            babble = babble.split(canSay[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    return answer;
}