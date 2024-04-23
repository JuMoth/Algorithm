function solution(n, m, section) {
  let answer = 0;
  let paintedPart = 0;

  section.forEach(el => {
      if (el > paintedPart) {
          paintedPart = el + m - 1;
          answer++;
      }
  });

  return answer;
}