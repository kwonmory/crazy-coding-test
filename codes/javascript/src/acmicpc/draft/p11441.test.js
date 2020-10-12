const solution = (input1, input2) => {
    const ans = [];

    input2.forEach(([start, end]) => {
        ans.push(input1.slice(start-1, end).reduce((acc, v) => acc += v, 0));
    });
    return ans; 
}

test.each([
    [[10,20,30,40,50], [[1,3], [2,4], [3,5], [1,5], [4,4]], [60, 90, 120, 150,40]]
])('합 구하기',(input1, input2, ans) => {
    expect(solution(input1, input2)).toEqual(ans);
});