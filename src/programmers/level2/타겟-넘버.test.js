const solution = (numbers, target) => {
    return go(0, 0, target, numbers);
}

const go = (index, current, target, numbers) => {
    if (index === numbers.length) {
        if (current === target) {
            return 1;
        }
        return 0;
    }

    return go(index + 1, current + numbers[index], target, numbers)
        + go(index + 1, current - numbers[index], target, numbers)
}

test.each([
    [[1,1,1,1,1], 3, 5]
])('타겟 넘버', (numbers, target, ans) => {
    expect(solution(numbers, target)).toBe(ans);
});

/*
    https://programmers.co.kr/learn/courses/30/lessons/43165
*/