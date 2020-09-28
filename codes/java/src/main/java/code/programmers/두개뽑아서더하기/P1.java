package code.programmers.두개뽑아서더하기;

import java.util.*;

class P1 {
    public int[] solution(int[] numbers) {
        Set<Integer> set = new HashSet<>();
        
        for (int i = 0; i < numbers.length - 1; i += 1) {
            for (int j = i + 1; j < numbers.length; j += 1) {
                set.add(numbers[i] + numbers[j]);
            }
        }
        
        List<Integer> data = new ArrayList<>(set);
        
        Collections.sort(data);

        int[] result = Arrays
        .stream(data.toArray(new Integer[data.size()]))
        .mapToInt(Integer::intValue)
        .toArray();

        return result;
    }
}