const solution = (n, m, list) => Math.max(...list.reduce((acc, value) => {
  const min = Math.min(...value);
  acc.push(min);
  return acc;
}, []));

test.each([
  [3, 3, [[3, 1, 2], [4, 1, 4], [2, 2, 2]], 2],
  [2, 4, [[7, 3, 1, 8], [3, 3, 3, 4]], 3],
])('숫자카드게임', (n, m, list, ans) => {
  expect(solution(n, m, list)).toBe(ans);
});
