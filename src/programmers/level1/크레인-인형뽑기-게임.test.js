let ans = 0;

function solution(board, moves) {
  const boardSize = board.length;
  const newBoard = [...Array(boardSize)].map(v => []);
  const jar = []; // 저장 창고

  board.forEach((list) => {
    list.forEach((item, index) => {
      if (item !== 0)
        newBoard[index].unshift(item)
    });
  });

  moves = moves.map(v => v - 1);

  // move 작업 시작
  moves.forEach(move => {
    // 윗줄부터 차레대로 검색하기
    if (newBoard[move].length !== 0) {
      const target = newBoard[move].pop();
      jar.push(target);
      checkJar(jar);
    }
  });

  return ans * 2;
}

// 얕은 복사를 이용한다.
function checkJar(jar) {
    const jarLength = jar.length;
  // queue 는 왼쪽이 0으로 시작
  if (jarLength < 2) return;

  if (jar[jarLength - 1] === jar[jarLength - 2]) {
    ans++;
    jar.pop();
    jar.pop();
    if (jarLength >= 2) {
      checkJar(jar);
    }
  }
}

test.each([
    [[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4],
4]
])('크레인 인형뽑기 게임', (board, moves, ans) => {
    expect(solution(board, moves)).toBe(ans);
})