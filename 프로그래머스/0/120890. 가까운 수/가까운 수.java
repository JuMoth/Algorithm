class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        int min = 0;
        for(int num : array){
            if(answer == 0){
                answer = num;
                min = Math.abs(num - n);
            }else{
                if(Math.abs(num - n) < min){
                    answer = num;
                    min = Math.abs(num - n);
                }else if( Math.abs(num - n) == min && num < answer){
                    answer = num;
                }
            }
        }
        return answer;
    }
}