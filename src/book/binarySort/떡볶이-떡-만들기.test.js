const solution = (n, m, height) => {
    // 맨 처음 높은걸로 높이를 정해버리고 이진 탐색 법으로 잘라나감
    // 계산해서 최소값 부터 시작해서 최대값 사이 값을 
    let end = Math.max(...height);
    let start = 0;

    let ans = 0;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        const sum = countingScore(height, mid);

        if (m <= sum) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return ans;
}

const countingScore = (array, n) => {
    let ans = 0;
    array.forEach(v => {
        const output = v - n;
        ans += (output > 0 ? output : 0);
    });
    return ans;
}

test.each([
    [4, 6, [19, 15, 10, 17], 15]
])('떡볶이 떡 만들기', (n, m, height, ans) => {
    expect(solution(n, m, height)).toBe(ans);
});