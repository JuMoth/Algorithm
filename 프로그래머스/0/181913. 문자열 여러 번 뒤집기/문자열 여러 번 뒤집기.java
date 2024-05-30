class Solution {
    public String solution(String my_string, int[][] queries) {
        StringBuilder sb = new StringBuilder(my_string);
        for (int i=0;i<queries.length;i++) {
            String a = sb.substring(queries[i][0], queries[i][1]+1);
            StringBuilder sba = new StringBuilder(a);
            sba.reverse();
            sb.replace(queries[i][0], queries[i][1]+1, sba.toString());
        }
        return sb.toString();
    }
}