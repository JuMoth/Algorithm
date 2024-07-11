class Solution {
    public String[] solution(String my_str, int n) {
        String[] answer = {};

        if (my_str.length() % n == 0) answer = new String[my_str.length() / n];
        else answer = new String[my_str.length() / n + 1];

        for (int i = 0; i < answer.length; i++) {
            answer[i] = (i * n + n <= my_str.length() - 1 ? my_str.substring(i * n, i * n + n) : my_str.substring(i * n));
        }

        return answer;
    }
}