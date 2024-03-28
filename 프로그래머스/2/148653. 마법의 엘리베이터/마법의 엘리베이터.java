class Solution {
    public int solution(int storey) {
        int ans = 0;
        
        while(storey>0) {
            int cur = storey % 10;
            int next = (storey / 10) % 10;
            
            if(cur > 5) {
                ans += 10 - cur;
                storey += 10;
            } else if(cur < 5) {
                ans += cur;
            } else {
                ans += cur;
                storey += next >= 5 ? 10 : 0;
            }
            storey /= 10;
        }
        
        return ans;
    }
}