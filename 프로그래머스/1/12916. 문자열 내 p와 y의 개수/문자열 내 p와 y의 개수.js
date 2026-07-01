function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    for(let i of s.split("")) {
        if(i === "p" || i === "P") {
            pCnt++;
        } else if(i === "y" || i === "Y") {
            yCnt++;
        } else continue;
    }
    if(pCnt === yCnt) {
        return true;
    } else if(pCnt === 0 && yCnt === 0) {
        return true;
    } else {
        return false;
    }
}