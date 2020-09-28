const solution = (n, m, k, list) => {
  let result = 0;
  let count = 1;
  let kFlag = 0;

  list.sort();

  const firstNumber = list[n - 1];
  const secondNumber = list[n - 2];

  while (count <= m) {
    count += 1;

    result += firstNumber;

    kFlag += 1;

    if (kFlag === k) {
      result += secondNumber;
      count += 1;
      kFlag = 0;
    }
  }

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
