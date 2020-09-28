const solution = (n, k) => {
  let copyN = n;
  let result = 0;

  while (copyN !== 1) {
    result += 1;

    if (copyN % k === 0) {
      copyN %= k;
      continue;
    }
    copyN -= 1;
  }

  return result;
};

test.each([
  [25, 5, 2],
  [4, 3, 2],
])('1이될때까지', (n, k, ans) => {
  expect(solution(n, k)).toBe(ans);
});
