const solution = (numbers) => {
  const set = new Set();

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set.values()].sort((a, b) => a - b);
};

test.each([
  [[2, 1, 3, 4, 1], [2, 3, 4, 5, 6, 7]],
  [[5, 0, 2, 7], [2, 5, 7, 9, 12]],
])('두개뽑아서더하기', (n, ans) => {
  expect(solution(n)).toEqual(ans);
});

/*
  https://programmers.co.kr/learn/courses/30/lessons/68644
*/