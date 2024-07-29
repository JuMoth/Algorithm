import java.util.*;

public class Solution {
    public int solution(int[][] board) {
        int[] dx = {1, 0, -1, 0, 1, 1, -1, -1};
        int[] dy = {0, 1, 0, -1, 1, -1, 1, -1};
        
        int n = board.length;
        
        int answer = n * n;
        
        List<int[]> ch = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 1) {
                    ch.add(new int[]{i, j});
                    answer--;
                }
            }
        }
        
        if (answer == 0) return 0;
        
        for (int[] w : ch) {
            for (int k = 0; k < 8; k++) {
                int nx = w[0] + dx[k];
                int ny = w[1] + dy[k];
                
                if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] == 0) {
                    board[nx][ny] = 1;
                    answer--;
                }
            }
        }
        
        return answer;
    }
}
