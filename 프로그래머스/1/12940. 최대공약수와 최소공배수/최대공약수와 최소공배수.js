//최대공약수
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

//최소공배수
function getLcm(a, b) {
    return (a * b) / getGcd(a, b);
}

function solution(n, m) {
    return [getGcd(n, m), getLcm(n, m)];
}