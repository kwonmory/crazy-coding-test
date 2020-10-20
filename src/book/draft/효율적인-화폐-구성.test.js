const solution = (n, m, list) => {
    const d = [...new Array(m + 1)].map(_ => 10001);
    d[0] = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = list[i]; j < m + 1; j++) {
            if (d[j - list[i]] !== 10001) {
                d[j] = Math.min(list[j], d[j - list[i]] + 1);
            }
        }
    }

    if (d[m] === 10001) return -1;
    
    return d[m];
}

test.each([
    [2, 15, [2,3], 5],
    [3, 4, [3,5,7], -1]
])('효율적인 화폐 구성', (n, m, list, ans) => {
    expect(solution(n,m,list)).toBe(ans);
});