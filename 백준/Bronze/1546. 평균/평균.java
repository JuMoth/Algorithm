import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cnt = Integer.parseInt(br.readLine());
        String[] scores = br.readLine().split(" ");

        int maxScore = Integer.MIN_VALUE;
        int sum = 0;

        for (String score : scores) {
            int currentScore = Integer.parseInt(score);
            maxScore = Math.max(maxScore, currentScore);
            sum += currentScore;
        }

        double average = ((double) sum / cnt / maxScore) * 100;
        System.out.println(average);
    }
}