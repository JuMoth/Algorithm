import java.util.Scanner;

public class Main {
    public static void main(String[] arg) {
        Scanner sc = new Scanner(System.in);
        
        //System.out.print("성적을 입력해주세요.: ");
        int score = sc.nextInt();
        sc.close();
        
        //if(score<=100 && score>=90){
        if(score>=90){
            System.out.print("A");
        } else if(score>=80) {
            System.out.print("B");
        } else if(score>=70) {
            System.out.print("C");
        } else if(score>=60) {
            System.out.print("D");
        } else {
            System.out.print("F");
        }
        /*else if(score<60 && score>=0) {
            System.out.print("F");
        } else {
            System.out.print("성적을 다시 입력해주세요.");
        }*/
        
    }
}