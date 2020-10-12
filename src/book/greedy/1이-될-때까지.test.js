const solution = (n, k) => {
  let answer = 0;

  while (true) {
    if (n <= 1) break;
    
    answer += 1;

    if (n % k === 0) {
      n = Math.floor(n / k);
      continue;
    }

    n -= 1;
  }

  return answer;
};

test.each([
  [25, 5, 2],
  [4, 3, 2],
])('1이될때까지', (n, k, ans) => {
  expect(solution(n, k)).toBe(ans);
});
