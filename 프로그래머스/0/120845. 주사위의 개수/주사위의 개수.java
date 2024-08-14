class Solution {
    public int solution(int[] box, int n) {
        int answer = 1;
        for(int num : box) {
            answer = answer * (int)(num / n);
        }
        return answer;
    }
}