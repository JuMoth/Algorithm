import java.util.Arrays;

class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];

        for(int i=0; i<s.length(); i++){
            String str = s.substring(0,i);
            if(str.indexOf(s.charAt(i))==-1) {
                answer[i] = -1;
            }else {
                answer[i] = i-str.lastIndexOf(s.charAt(i));
            }
        }
        return answer;
    }
}