function solution(str_list, ex) {
    // let answer = "";
    // let filtered = str_list.filter(a => !a.includes(ex));
    // for(let i=0; i<filtered.length; i++) {
    //         answer += filtered[i];
    // }
    // return answer;
    
    let answer = '';
    answer = str_list.filter(a => !a.includes(ex)).join("");
    return answer;
}