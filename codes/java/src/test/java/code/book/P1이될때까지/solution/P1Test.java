package code.book.P1이될때까지.solution;

import org.junit.Assert;
import org.junit.Test;

public class P1Test {
    
    @Test
    public void solution() {
        int[] n = {25};
        int[] k = {5};
        int[] result = {2};

        for(int i = 0; i < n.length; i++) {
            Assert.assertEquals(new P1().solution(n[i], k[i]), result[i]);
        }
    }
}
