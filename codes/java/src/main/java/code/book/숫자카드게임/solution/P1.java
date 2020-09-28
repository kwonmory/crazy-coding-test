package code.book.숫자카드게임.solution;

import java.util.*;

public class P1 {
    public int solutin(int n, int m, int[][] list) {
        
        List<Integer> minList = new ArrayList<>();
        
        for (int i = 0; i < list.length; i++) {
            int[] target = list[i];

            Arrays.sort(target);
            
            minList.add(target[0]);
        }

        int result = Collections.max(minList);
        return result;
    }
}
