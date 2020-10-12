package code.programmers.두개뽑아서더하기;

import org.junit.Assert;
import org.junit.Test;

public class P1Test {
    @Test
    public void solution() {
        int[][] numbers = {
            {2,1,3,4,1}, {5,0,2,7}
        };
        int[][] result = {
            {2,3,4,5,6,7}, {2,5,7,9,12}
        };

        for (int i = 0; i < numbers.length; i += 1) {
            Assert.assertArrayEquals(new P1().solution(numbers[i]), result[i]);
        } 
    }
}
