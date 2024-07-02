import java.util.Arrays;

class Solution {
    public int[] solution(int[][] score) {
        int n = score.length;
        double[] avg = new double[n];
        for (int i = 0; i < n; i++) {
            avg[i] = (score[i][0] + score[i][1]) / 2.0;
        }

        double[] sorted = avg.clone();
        Arrays.sort(sorted);
        
        for (int i = 0; i < sorted.length / 2; i++) {
            double temp = sorted[i];
            sorted[i] = sorted[sorted.length - 1 - i];
            sorted[sorted.length - 1 - i] = temp;
        }

        int[] ranks = new int[n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < sorted.length; j++) {
                if (avg[i] == sorted[j]) {
                    ranks[i] = j + 1;
                    break;
                }
            }
        }

        return ranks;
    }
}