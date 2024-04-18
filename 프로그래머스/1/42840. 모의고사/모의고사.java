import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {
    public List<Integer> solution(int[] answers) {
        Map<Integer, int[]> patterns = new HashMap<>();
        patterns.put(1, new int[]{1, 2, 3, 4, 5});
        patterns.put(2, new int[]{2, 1, 2, 3, 2, 4, 2, 5});
        patterns.put(3, new int[]{3, 3, 1, 1, 2, 2, 4, 4, 5, 5});

        Map<Integer, Integer> scores = new HashMap<>();

        for (Map.Entry<Integer, int[]> entry : patterns.entrySet()) {
            int key = entry.getKey();
            int[] pattern = entry.getValue();
            int score = 0;

            for (int i = 0; i < answers.length; i++) {
                if (pattern[i % pattern.length] == answers[i]) {
                    score++;
                }
            }
            scores.put(key, score);
        }

        int maxScore = Integer.MIN_VALUE;
        List<Integer> result = new ArrayList<>();

        for (Map.Entry<Integer, Integer> entry : scores.entrySet()) {
            int key = entry.getKey();
            int score = entry.getValue();

            if (score > maxScore) {
                maxScore = score;
                result.clear();
                result.add(key);
            } else if (score == maxScore) {
                result.add(key);
            }
        }
        return result;
    }
}