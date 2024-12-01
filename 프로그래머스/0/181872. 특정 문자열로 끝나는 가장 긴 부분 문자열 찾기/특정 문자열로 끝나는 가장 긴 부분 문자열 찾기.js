function solution(myString, pat) {
    let patIdx = myString.lastIndexOf(pat);
    // console.log(patIdx);
    return myString.slice(0, patIdx+pat.length);
}