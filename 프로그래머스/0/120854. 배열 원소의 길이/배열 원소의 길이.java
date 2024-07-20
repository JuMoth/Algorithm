class Solution {
    public int[] solution(String[] strlist) {
        int[] answer = {};

        answer = new int[strlist.length];

        if(strlist != null) {
            for(int i =0; i<strlist.length; i++){
                answer[i] = strlist[i].length();
            }
        }

        return answer;
    }
}