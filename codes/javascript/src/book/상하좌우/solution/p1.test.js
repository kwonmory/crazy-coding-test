const solution = (n, list) => {
  // map을 만든다.
  // 각 list의 요소마다 실행 시킬 준비를 한다.
  // 조건에 맞게 이동할 수 있는지 체크를 한다.
  // 이동 시켜준다.
  // 결과 제출
};

test.each([
  [5, ['R', 'R', 'R', 'U', 'D', 'D'], [3, 4]],
])('상하좌우', (n, list, ans) => {
  expect(solution(n, list)).toEqual(ans);
});
