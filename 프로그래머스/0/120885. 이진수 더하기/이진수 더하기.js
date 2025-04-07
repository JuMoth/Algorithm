function solution(bin1, bin2) {
    let answer = '';
    
    function toTen(bin) {
        return parseInt(bin, 2);
    }
    console.log(toTen(bin1)+toTen(bin2));
    
    answer = Number(toTen(bin1)+toTen(bin2)).toString(2);
    
    return answer;
}