// class Solution {
//     public int solution(int[] numbers) {
//         int sum = 0;
//         for(int num : numbers) sum += num;
//         return 45-sum;
//     }
// }

import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        int[] numArr = new int[10];
        Arrays.fill(numArr, 0);

        for (int num : numbers) {
            numArr[num] = num;
        }

        for (int i = 0; i < numArr.length; i++) {
            if (numArr[i] == 0) {
                answer += i;
            }
        }

        return answer;
    }
}