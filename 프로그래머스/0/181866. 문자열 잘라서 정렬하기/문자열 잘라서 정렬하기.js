function solution(myString) {
    let answer = "";
    let newStr= myString.split("x").filter(v => v!=="");
    return newStr.sort();
}