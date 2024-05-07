class Solution {
    public static int getFactors(int num) {
        int factorsLen = 0;
        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                factorsLen++;
            }
        }
        return factorsLen;
    }
    
    public int solution(int left, int right) {
        int answer = 0;

        for (int j = left; j <= right; j++) {
            if (getFactors(j) % 2 == 0) {
                answer += j;
            } else {
                answer -= j;
            }
        }

        return answer;
    }
}