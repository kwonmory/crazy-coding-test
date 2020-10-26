const solution = (input) => {
    let set = new Set();
    
    function go(item, list) {
        const sum = list.reduce((acc, v) => acc += v, 0);

        if (sum > input) return;

        if (sum === input) {
            set.add(list.toString());
            return;
        }

        go(item + 1, [...list, 1]);
        go(item + 2, [...list, 2]);
        go(item + 3, [...list, 3]);
    }
    go(0, []);
    return set.size;
}

test.each([
  [4, 7],
  [7, 44],
  [10, 274]
])('1 2 3 더하기', (input, ans) => {
    expect(solution(input)).toBe(ans);
});