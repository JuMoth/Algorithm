function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;

    let max = 1;

    for (let i = 1; i <= numer && i <= denom; i++) {
        if (denom % i === 0 && numer % i === 0) {
            max = i;
        }
    }

    numer = numer / max;
    denom = denom / max;

    return [numer, denom];
}