import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int x = scanner.nextInt();
        int y = scanner.nextInt();
        int w = scanner.nextInt();
        int h = scanner.nextInt();

        int[] distance = {x, y, w - x, h - y};
        int minDistance = Integer.MAX_VALUE;
        for (int dist : distance) {
            if (dist < minDistance)
                minDistance = dist;
        }
        System.out.println(minDistance);
    }
}