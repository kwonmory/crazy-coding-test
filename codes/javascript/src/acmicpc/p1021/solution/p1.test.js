const solution = (n, m, list) => {

  // 간단하게 덱을 이용하는 방법이 있다.
  // 우선 2가지 방법이 있는데, 왼쪽 오른쪽, 비교해서 작은 쪽으로 이동하면 될듯

};

test([
  [10, 3, [1, 2, 3], 0],
  [10, 3, [2, 9, 5], 8],
  [32, 6, [27, 16, 30, 11, 6, 23], 59],
  [10, 10, [1, 6, 3, 2, 7, 9, 8, 4, 10, 5], 14],
])('회전하는 큐', (n, m, list, ans) => {
  expect(solution(n, m, list)).toBe(ans);
});