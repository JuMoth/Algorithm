import java.util.Arrays;

class Solution {
    public long solution(long n) {
        String str = Long.toString(n);
        char[] ch = str.toCharArray();
        
        Arrays.sort(ch);
        
        StringBuilder sb = new StringBuilder(new String(ch, 0, ch.length));
        
        return Long.parseLong((sb.reverse()).toString());
    }
}