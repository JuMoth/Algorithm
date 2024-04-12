class Solution {
    public String solution(int a, int b) {
        int[] days = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        String[] weeks = {"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"};
        
        int totalDays = b;
        
        for(int i=0; i<a-1; i++) {
            totalDays += days[i];
        }
        
        return weeks[(totalDays-1)%7];
    }
}