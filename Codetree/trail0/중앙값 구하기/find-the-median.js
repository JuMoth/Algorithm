const fs = require("fs");
// let [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
// let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// if(A > B && A < C) {
//     console.log(A);
// } else if(B > A && B < C) {
//     console.log(B);
// } else {
//     console.log(C);
// }

// input.sort();
// console.log(input[1]);
if (a > b) {
    if (c > a) {
        // a > b, c > a 일때 (c > a > b)
        console.log(a);
    }
    // a > b, a > c 일때 (a가 가장 크고, b와 c중 더 큰 수가 중앙값)
    else if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
else {
    if (c > b) {
        // b > a, c > b 일때 (c > b > a)
        console.log(b);
    }
    // b > a, b > c 일때 (b가 가장 크고, a와 c중 더 큰 수가 중앙값)
    else if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}