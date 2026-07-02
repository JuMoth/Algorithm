function solution(d, budget) {
    d.sort((a, b) => a-b);

    let index = 0;

    while(index<d.length && d[index]<=budget) {
        budget -= d[index++];
    }

    return index;
}