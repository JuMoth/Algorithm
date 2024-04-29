class Solution {
    public static int solution(int n) {
        return Integer.parseInt(new StringBuilder(Integer.toString(n, 3)).reverse().toString(), 3);
    }

    public static void main(String[] args) {
        int n = 45;
        System.out.println(solution(n));
    }
}