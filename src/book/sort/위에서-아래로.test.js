const solution = (input) => {
    input.sort((a,b) => b - a);

    return input.reduce((acc, v) => acc += `${v} `, '').trim();
}

test.each([
    [[15,27,12], '27 15 12']
])('위에서 아래로', (input, ans) => {
    expect(solution(input)).toEqual(ans);
});
