function solution(n) {
    let answer = 0;
    const cols = Array(n).fill(false);
    const diag1 = Array(2 * n - 1).fill(false);
    const diag2 = Array(2 * n - 1).fill(false);

    function dfs(row) {
        if (row === n) {
            answer++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols[col] || diag1[row + col] || diag2[row - col + n - 1]) {
                continue;
            }

            cols[col] = true;
            diag1[row + col] = true;
            diag2[row - col + n - 1] = true;

            dfs(row + 1);

            cols[col] = false;
            diag1[row + col] = false;
            diag2[row - col + n - 1] = false;
        }
    }

    dfs(0);

    return answer;
}