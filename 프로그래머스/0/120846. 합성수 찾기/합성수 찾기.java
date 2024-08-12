import java.util.*;

class Solution {
    public int solution(int n) {
        Set<Integer> cnt = new HashSet<>();

        for (int i = 1; i <= n; i++) {
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    cnt.add(i);
                    break;
                }
            }
        }

        return cnt.size();
    }
}