class Solution {
    public int solution(String my_string) {
        int answer = 0;
        String[] s = my_string.trim().split(" ");
        int oper = 1;
        for (String s1 : s) {
            if(s1.equals("+") || s1.equals("-")){
                oper = s1.equals("-") ? -1 : 1;
            }else{
                answer += Integer.parseInt(s1) * oper;
            }
        }
        return answer;
    }
}