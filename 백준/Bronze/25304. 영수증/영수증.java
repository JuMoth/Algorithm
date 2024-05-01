import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int total = Integer.parseInt(br.readLine());
        int cnt = Integer.parseInt(br.readLine());
        int sum = 0;
        for (int i = 0; i < cnt; i++) {
            String[] product = br.readLine().split(" ");
            sum += Integer.parseInt(product[0]) * Integer.parseInt(product[1]);
        }

        if (total == sum) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}