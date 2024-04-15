function solution(answers) {
    const x = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    }
    const result = []

    const scores = {}

    for (const key in x) {
        let score = 0;
        for (let i = 0; i < answers.length; i++) {
            if (x[key][i % x[key].length] === answers[i]) {
                score++;
                console.log(score);
            }
        }
        scores[key] = score;
    }

    const maxScore = Math.max(...Object.values(scores));

    for (const key in scores) {
        if (scores[key] === maxScore) result.push(+key);
    }

    return result;
}