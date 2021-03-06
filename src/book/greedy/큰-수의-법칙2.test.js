const solution = (n, m, k, list) => {
  list.sort();

  const first = list[n - 1];
  const second = list[n - 2];

  let count = Math.floor(m / (k + 1)) * k;
  count += (m % (k + 1));

  let result = count * first;
  result += (m - count) * second;

  return result;
};

test.each([
  [5, 8, 3, [2, 4, 5, 4, 6], 46],
])('큰수의법칙', (n, m, k, list, ans) => {
  expect(solution(n, m, k, list)).toEqual(ans);
});

/*
    값을 한꺼번에 곱해서 집어넣으려고 했는데, 한꺼번에 안들어가는 애들도 있을 것이다.
*/
