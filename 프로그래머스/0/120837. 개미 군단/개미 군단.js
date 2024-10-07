function solution(hp) {
    return Math.floor(hp / 5)+Math.floor((hp - Math.floor(hp / 5) * 5) / 3)+(hp - Math.floor(hp / 5) * 5 - Math.floor((hp - Math.floor(hp / 5) * 5) / 3) * 3);
}