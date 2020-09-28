package code.book.P1이될때까지.solution;

public class P1 {
    public int solution(int n, int k) {
        int result = 0;

        while (n != 1) {
            result += 1;

            if (n % k == 0) n /= k;
            else n -= 1;
        }

        return result;
    }
}
