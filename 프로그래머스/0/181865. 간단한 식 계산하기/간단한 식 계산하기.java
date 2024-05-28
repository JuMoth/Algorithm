class Solution {
    public int solution(String binomial) {
        String[] cal = binomial.split(" ");

        if (cal[1].equals("+")) {
            return (Integer.parseInt(cal[0])) + (Integer.parseInt(cal[2]));
        } else if (cal[1].equals("-")) {
            return (Integer.parseInt(cal[0])) - (Integer.parseInt(cal[2]));
        } else {
            return (Integer.parseInt(cal[0])) * (Integer.parseInt(cal[2]));
        }
    }
}