class Solution {
    public int solution(int order) {
        int answer = 0;

        String str = order+"";

        for(int i=0; i<str.length(); i++){
            char c = str.charAt(i);
            if(c=='3'||c=='6'||c=='9') answer++;
        }

        return answer;
    }
}