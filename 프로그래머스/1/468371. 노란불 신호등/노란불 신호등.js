function solution(signals) {
    const gcd = (a, b) => {
        while (b) [a, b] = [b, a % b];
        return a;
    };

    const extGcd = (a, b) => {
        if (b === 0) return [1, 0];

        const [x, y] = extGcd(b, a % b);
        return [y, x - Math.floor(a / b) * y];
    };

    const modInverse = (a, m) => {
        if (m === 1) return 0;

        const [x] = extGcd(a, m);
        return ((x % m) + m) % m;
    };

    // x ≡ a (mod m)
    // x ≡ b (mod n)
    const merge = (a, m, b, n) => {
        const g = gcd(m, n);
        const diff = b - a;

        if (diff % g !== 0) return null;

        const nm = n / g;
        const k = (
            (diff / g) * modInverse(m / g, nm)
        ) % nm;

        const lcm = m / g * n;
        const result = ((a + m * k) % lcm + lcm) % lcm;

        return [result, lcm];
    };

    let candidates = [[0, 1]];

    for (const [G, Y, R] of signals) {
        const period = G + Y + R;
        const next = [];

        // t % period가 G+1 ~ G+Y이면 노란불
        for (const [a, m] of candidates) {
            for (let r = G + 1; r <= G + Y; r++) {
                const result = merge(a, m, r, period);

                if (result) {
                    next.push(result);
                }
            }
        }

        // 같은 나머지 제거
        const map = new Map();

        for (const [a, m] of next) {
            map.set(`${a},${m}`, [a, m]);
        }

        candidates = [...map.values()];

        if (candidates.length === 0) return -1;
    }

    let answer = Infinity;

    for (const [a, m] of candidates) {
        const time = a === 0 ? m : a;
        answer = Math.min(answer, time);
    }

    return answer === Infinity ? -1 : answer;
}