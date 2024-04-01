class Solution {
    public int[] solution(long n) {
        String strN = String.valueOf(n);
        StringBuilder sbN = new StringBuilder(strN);
        sbN = sbN.reverse();
        String[] splitedN = sbN.toString().split("");
    
        int[] answer = new int[splitedN.length];
        for (int i=0; i<splitedN.length; i++) {
            answer[i] = Integer.parseInt(splitedN[i]);
        }
        return answer;
    }
}