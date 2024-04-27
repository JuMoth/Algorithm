import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int[] basket = new int[n];
        for (int i = 0; i < n; i++) {
            basket[i] = i + 1;
        }

        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            int[] temp = new int[b - a + 1];
            for (int j = a - 1, k = 0; j < b; j++, k++) {
                temp[k] = basket[j];
            }

            for (int j = 0; j < temp.length / 2; j++) {
                int tempValue = temp[j];
                temp[j] = temp[temp.length - 1 - j];
                temp[temp.length - 1 - j] = tempValue;
            }

            for (int j = a - 1, k = 0; j < b; j++, k++) {
                basket[j] = temp[k];
            }
        }

        for (int i = 0; i < n; i++) {
            System.out.print(basket[i] + " ");
        }
    }
}