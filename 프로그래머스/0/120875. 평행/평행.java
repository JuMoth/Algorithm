class Solution {
    public int calculation(int[] a, int[] b, int[] c, int[] d) {
        double abDiff, cdDiff;

        abDiff = (double)(b[1] - a[1]) / (b[0] - a[0]);
        cdDiff = (double)(d[1] - c[1]) / (d[0] - c[0]);

        return abDiff == cdDiff ? 1 : 0;
    }

    public int solution(int[][] dots) {
        int answer = 0;

        answer += calculation(dots[0], dots[1], dots[2], dots[3]);
        answer += calculation(dots[0], dots[2], dots[1], dots[3]);
        answer += calculation(dots[0], dots[3], dots[1], dots[2]);

        return answer > 0 ? 1 : 0;
    }
}