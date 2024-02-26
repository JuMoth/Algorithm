// function solution(s) {
//     let result = "";
//     let sLenCenter = s.length/2;
//     if(sLenCenter%2 === 0) {
//         result+= s[sLenCenter-1] + s[sLenCenter];
//     } else {
//         result += s[Math.floor(sLenCenter)];
//     }
//     return result;
// }

// function solution(s) {
//     let result = "";
//     let sLenCenter = s.length/2;
//     if (s.length%2 === 0) {
//         result = s.substring(sLenCenter-1, 3);
//     } else {
//         result = s.charAt(Math.floor(sLenCenter));
//     }
//     return result;
// }

function solution(s) {
    const middleIndex = Math.floor(s.length/2);

    if (s.length%2 === 0) {
        return s.slice(middleIndex-1, middleIndex+1);
    } else {
        return s.charAt(middleIndex);
    }
}