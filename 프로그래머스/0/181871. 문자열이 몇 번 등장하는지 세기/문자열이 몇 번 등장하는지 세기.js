function solution(myString, pat) {
    let arr = [];
    
    for(i=0; i<myString.length; i++){
        arr.push(myString.slice(i,i+pat.length));
    }
    return arr.filter(v=> v===pat).length;
}