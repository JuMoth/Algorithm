function solution(n, lost, reserve) {
    let answer = n-lost.length;
    // lost와 reserve 둘 다에 속할 경우에는
    // 여분의 체육복이 2-1.
    // 즉, 하나밖에 없기때문에 빌려줄 수 없으므로
    // lost와 reserve 두 배열에서 제외시켜준다
    let filteredLost = lost.filter(v=>!reserve.includes(v));
    let filteredReserve = reserve.filter(v=>!lost.includes(v));
    answer+=lost.length-filteredLost.length;
    
    filteredLost.sort((a,b)=>a-b);
    
    filteredLost.forEach(l=>{
        if(filteredReserve.length===0) return;        
        if(filteredReserve.includes(l-1)){
            filteredReserve=filteredReserve.filter(r=>r!==l-1);
            answer++;
        }
        else if(filteredReserve.includes(l+1)){
            filteredReserve=filteredReserve.filter(r=>r!==l+1);
            answer++;
        }
    })
    return answer;
}