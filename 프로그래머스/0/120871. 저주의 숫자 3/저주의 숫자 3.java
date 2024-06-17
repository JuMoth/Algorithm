class Solution {
    public int solution(int n) {
        String str;
        for (int i = 1; i <= n; i++){
            str = ""+i;
            if(str.contains("3") || i%3 == 0) n++;
        }
        return n;   
    }
}