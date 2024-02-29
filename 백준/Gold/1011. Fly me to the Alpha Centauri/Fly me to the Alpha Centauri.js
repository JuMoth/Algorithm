let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);

let x;
let y;
let a;
let b;

let answerArray = [];
for(let i = 1; i <= cnt; i++){
    input[i] = input[i].split(" ");
    x = Number(input[i][0]);
    y = Number(input[i][1]);

    if(Math.sqrt(y-x) % 1 === 0 ){
        answer = 2 * Math.sqrt(y-x) - 1;

    }else{
        a = Math.pow(Math.ceil(Math.sqrt(y-x)), 2);
        b = Math.pow(Math.ceil(Math.sqrt(y-x)) - 1, 2) + 1;
        if((a+b) / 2 <= y-x){
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 1;
        }else{
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 2;
        }
    }
    answerArray.push(answer);
    console.log(answerArray[answerArray.length - 1]);
}