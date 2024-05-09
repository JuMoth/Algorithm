class Solution {
    public int solution(String[] babbling) {
        String[] canSay = {"aya", "ye", "woo", "ma"};
        int answer = 0;
        
        for(int i = 0; i < babbling.length; i++) {
            String babble = babbling[i];
            
            for(int j = 0; j < canSay.length; j++) {
                // 연속 2번 나오면 break
                if(babble.contains(canSay[j] + canSay[j])) {
                    break;
                }
                babble = babble.replace(canSay[j], " ");
            }
            
            if(babble.replaceAll(" ", "").length() == 0) {
                answer += 1;
            }
        }
        return answer;
    }
}