function solution(myString, pat) {
    let patIdx = myString.lastIndexOf(pat);
    return myString.slice(0, patIdx+pat.length);
}