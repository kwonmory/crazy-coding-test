const solution = (input) => {
    const store = [...new Array({length: 100})].map(v => 0);

    store[0] = input[0];
    store[1] = Math.max(input[0], input[1]);

    for (let i = 2; i < input.length; i++) {
        store[i] = Math.max(store[i-1], store[i-2] + input[i]);
    }

    return store[input.length - 1];
}

test.each([
    [[1,3,1,5], 8]
])('개미 전사', (input, ans) => {
    expect(solution(input)).toBe(ans);
});