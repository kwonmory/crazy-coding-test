const solution = (n) => {
  if (n < 100) {
    return n;
  }

  let ans = 99;

  // 여기서부터 각 카운트를 세면서 한수인지 체크를 해야한다.

  for (let i = 100; i <= n; i += 1) {
    const number2string = i.toString().split('');
    // 여기서 각 자리별로 차이를 비교를 한다.
    const diffNumber = [];

    for (let j = 0; j < number2string.length - 1; j += 1) {
      // 각 자리별로 차이를 빼서 저장해야함
      const number = number2string[j] - number2string[j + 1];
      diffNumber.push(number);
    }

    if (diffNumber.every((v) => v === parseInt(diffNumber[0], 10))) {
      // 모두가 동일하면 오키
      ans += 1;
    }
  }

  return ans;
};

test.each([
  [110, 99],
  [1, 1],
  [210, 105],
  [1000, 144],
])('한수', (n, ans) => {
  expect(solution(n)).toEqual(ans);
});
