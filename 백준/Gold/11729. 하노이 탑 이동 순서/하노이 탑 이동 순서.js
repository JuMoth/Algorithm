const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let cnt = 0;
let answer = [];

// input : 원반의 개수
// from : 출발지 기둥 번호
// to : 목적지 기둥 번호
// other : 나머지 기둥 번호

function Hanoi(num, from, other, to){
  // num - 1이 음수가 되면 안되므로 num == 0이라면 함수 종료
  if(num === 0) {
    return;
  } else {
    // num번 원반 바로 위에 있는 원반을 목적지가 아닌 곳으로 이동
    Hanoi(num - 1 , from, to, other);
    
    // 맨 아래 원반을 목적지로 이동시킴
    answer.push([from, to]);
    
    // 수행 횟수 증가
    cnt++;
    
    //다른 곳으로 옮겼던 원반들을 그 위에 얹음
    Hanoi(num - 1, other, from, to);
  }
}

Hanoi(input, 1, 2, 3);

console.log(cnt);
console.log(answer.map((element) => element.join(" ")).join("\n"));