const solution = (N, M) => {
    const ans = [];

    M.forEach(v => {
        if (binarySearch(N, v, 0, N.length-1)) ans.push('yes');
        else ans.push('no')
    });

    return ans;
}

const binarySearch = (array, target, start, end) => {
    if (end <= start) return false;
    
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return true

    if (array[start] > target) return binarySearch(array, target, start, mid - 1);
    else return binarySearch(array, target, mid+ 1, end);
}


test.each([
    [[8,3,7,9,2], [5,7,9], ['no', 'yes', 'yes']]
])('부품 찾기', (N, M, ans) => {
    expect(solution(N, M)).toEqual(ans);
});