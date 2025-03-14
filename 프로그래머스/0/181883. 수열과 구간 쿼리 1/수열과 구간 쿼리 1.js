function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [from, to] = cur;
        for(let i=from; i<to+1; i++) {
            acc[i] += 1;
        }
        return acc;
    }, arr);
}