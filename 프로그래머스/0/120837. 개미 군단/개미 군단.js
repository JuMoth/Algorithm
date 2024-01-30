function solution(hp) {
    // 장군 5
    // 병정 3
    // 일 1
    const a = Math.floor(hp / 5);
    const b = Math.floor((hp - a * 5) / 3);
    const c = hp - a * 5 - b * 3;
    return a+b+c;
}