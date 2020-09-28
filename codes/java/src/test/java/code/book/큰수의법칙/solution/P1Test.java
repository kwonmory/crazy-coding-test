package code.book.큰수의법칙.solution;

import org.junit.Assert;
import org.junit.Test;

public class P1Test {
    @Test
    public void solution() {
        final int n = 5;
        final int m = 8;
        final int k = 3;
        final int[] list = {
            2,4,5,4,6
        };
    
        Assert.assertEquals(new P1().solution(n, m, k, list), 46);
    }
}
