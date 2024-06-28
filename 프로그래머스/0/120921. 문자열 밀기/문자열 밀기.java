class Solution {
    public int solution(String A, String B) {
        if (A.length() != B.length()) {
            return -1;
        }
        String doubledB = B + B;
        return doubledB.indexOf(A);
    }
}