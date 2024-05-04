import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");
        int A = Integer.parseInt(input[0]);
        int B = Integer.parseInt(input[1]);
        int V = Integer.parseInt(input[2]);

        // (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
        System.out.println((int)Math.ceil((double)(V-B)/(A-B)));
    }
}