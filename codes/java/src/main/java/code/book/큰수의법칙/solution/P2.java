package code.book.큰수의법칙.solution;

import java.util.Arrays;

public class P2 {
    public int solution(int n, int m, int k, int[] data) {
        
        Arrays.sort(data);
        
        int first = data[n - 1];
        int second = data[n - 2];
        int result = 0;

        while (true) {
            for (int i = 0; i < k; i++) {
                if (m <= 0) break;
                result += first;
                m -= 1;
            }
            
            if (m <= 0) break;
            result += second;
            m -= 1;
        }

        return result;
    }
}
