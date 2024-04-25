public class Solution {
    public String solution(int[] food) {
        StringBuilder result = new StringBuilder();
        for (int i=0; i<food.length; i++) {
            if (food[i]/2 < 1) continue;
            else {
                for (int j=0; j<food[i]/2; j++) {
                    result.append(String.valueOf(i));
                }
            }
        }
        StringBuilder reverse = new StringBuilder(result);
        reverse.reverse();
        return result.toString() + "0" + reverse.toString();
    }
}