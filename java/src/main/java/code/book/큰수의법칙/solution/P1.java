package code.book.큰수의법칙.solution;

import java.util.Arrays;

public class P1 {
    public int solution(int n, int m, int k, int[] list) {
        
        Arrays.sort(list);

        int first = list[n-1];
        int second = list[n-2];

        int count = (m / (k + 1)) * k;
        count += m % (k + 1);

        int result = count * first;
        result += (m - count) * second;
        
        return result;
    }
}
