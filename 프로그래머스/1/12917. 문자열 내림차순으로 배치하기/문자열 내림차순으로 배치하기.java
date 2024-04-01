import java.util.Arrays;

class Solution {
    public String solution(String s) {
        char[] charS = s.toCharArray();
        Arrays.sort(charS);
        StringBuilder sbS = new StringBuilder(new String(charS));
        return sbS.reverse().toString();
    }
}