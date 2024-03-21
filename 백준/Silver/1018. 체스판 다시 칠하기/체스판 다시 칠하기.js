let [size, ...arr] = require('fs')
    .readFileSync(process.platform === "linux"?'/dev/stdin':'./input.txt')
    .toString()
    .trim()
    .split('\n');

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const [N, M] = size.split(' ');
arr = arr.map(i => i.split(''));
const ans = [];

const whiteStart = (x, y) => {
    let cnt = 0;
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            if(arr[i+x][j+y] !== white[i][j]) {
                cnt++;
            }
        }
    }
    return cnt;
}

const blackStart = (x, y) => {
    let cnt = 0;
    for(let i=0; i<8; i++) {
        for(let j=0; j<8; j++) {
            if(arr[i+x][j+y] !== black[i][j]) {
                cnt++;
            }
        }
    }
    return cnt;
}

for(let i=0; i<N-7; i++) {
    for(let j=0; j<M-7; j++) {
        ans.push(whiteStart(i, j));
        ans.push(blackStart(i, j));
    }
}

console.log(Math.min(...ans));