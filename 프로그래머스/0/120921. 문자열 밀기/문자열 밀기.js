function solution(A, B) {
//     if (A.length !== B.length) {
//         return -1;
//     }
    
//     // const doubledA = A + A;
//     // return doubledA.indexOf(B);
    
//     let count = 0;
//     while (A !== B) {
//         A = A[A.length-1] + A.slice(0, A.length-1);
//         count++;

//         if (A === B) {
//             return count;
//         }
        
//         if (count > A.length) {
//             return -1;
//         }
//     }
    if (A.length !== B.length) {
        return -1;
    }
    const doubledB = B + B;
    return doubledB.indexOf(A);

    return count;
}