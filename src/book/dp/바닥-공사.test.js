const solution = (input) => {
    const DIVIDE_NUMBER = 796796;

    const arr = [...Array({length: 1000})].map(v => 0);
    
    arr[1] = 1;
    arr[2] = 3;
    
    for(let i = 3; i <= input; i++) {
        arr[i] = (arr[i-2] * 2 + arr[i-1]) % DIVIDE_NUMBER;
    }

    return arr[input] % DIVIDE_NUMBER;
}

test.each([
    [3, 5]
])('바닥 공사', (input, ans) => {
    expect(solution(input)).toBe(ans);
})