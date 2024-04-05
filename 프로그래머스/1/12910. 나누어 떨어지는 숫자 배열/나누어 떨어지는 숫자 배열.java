import java.util.Arrays;
import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr, int divisor) {
        ArrayList<Integer> answerList = new ArrayList<>();
        for (int num : arr) {
            if (num % divisor == 0) {
                answerList.add(num);
            }
        }
        
        if (answerList.isEmpty()) {
            return new int[]{-1};
        }
        
        int[] answer = new int[answerList.size()];
        for (int i = 0; i < answerList.size(); i++) {
            answer[i] = answerList.get(i);
        }
        
        Arrays.sort(answer);
        return answer;
    }
}
