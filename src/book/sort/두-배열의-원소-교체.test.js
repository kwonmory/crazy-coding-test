const solution = (n, k, a, b) => {
    const A = a.split(' ').map(v => Number(v));
    const B = b.split(' ').map(v => Number(v));
   
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);

    for(let i = 0; i < k; i++) A[i] = B[i];
    
    return A.reduce((acc, v) => acc += v);
}

test.each([
    [5,3,'1 2 5 4 3', '5 5 6 6 5', 26]
])('두 배열의 원소 교체',(n,k,a,b, ans) => {
    expect(solution(n,k,a,b)).toBe(ans);
});