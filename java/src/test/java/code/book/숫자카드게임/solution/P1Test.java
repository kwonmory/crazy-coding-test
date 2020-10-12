package code.book.숫자카드게임.solution;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class P1Test {

    @Test
    public void solution() {
        int[] n = {3,2};
        int[] m = {3,4};
        int[][][] list = {
            {
                {3,1,2},
                {4,1,4},
                {2,2,2}
            },
            {
                {7,3,1,8},
                {3,3,3,4}
            }
        };
        int[] ans = {2,3};

        for (int i = 0; i < n.length; i++)
            assertEquals(new P1().solutin(n[i], m[i], list[i]), ans[i]);
    }
}
