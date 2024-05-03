import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // N 값은 사용하지 않으므로 입력만 받기
        br.readLine();

        String[] inputString = br.readLine().split(" ");
        int[] input = new int[inputString.length];

        for (int i = 0; i < inputString.length; i++) {
            input[i] = Integer.parseInt(inputString[i]);
        }

        int min = input[0];
        int max = input[0];

        for (int i = 1; i < input.length; i++) {
            if (input[i] < min) {
                min = input[i];
            }
            if (input[i] > max) {
                max = input[i];
            }
        }

        System.out.println(max - min);

        br.close();
    }
}