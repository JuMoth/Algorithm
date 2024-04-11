class Solution {
    public String solution(String s) {
        int answer = s.length();
        if (answer % 2 == 0){
            return s.substring(answer/2-1, answer/2+1);
        } else {
            return Character.toString(s.charAt(answer/2));
        }
    }
}