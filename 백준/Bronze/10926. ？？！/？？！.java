import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        String emotion = "??!";
        
        String name = s.next();
        System.out.println(name + emotion);
        
        s.close();
    }
}