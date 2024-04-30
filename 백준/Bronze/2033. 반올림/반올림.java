import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int k = 1;
        for (int i = 10; ; i *= 10) {
            if (n >= i) {
                int remainder = n % i;
                if (remainder >= i / 2) {
                    n += (i - remainder);
                } else {
                    n -= remainder;
                }
            } else break;
            k++;
        }
        System.out.println(n);
        scanner.close();
    }
}