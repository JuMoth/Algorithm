const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(s) {    
    for (let i = 0; i < numArr.length; i++) {
        const numStr = numArr[i];
        const regex = new RegExp(numStr, "g");
        s = s.replace(regex, i);
    }
    
    return Number(s);
}