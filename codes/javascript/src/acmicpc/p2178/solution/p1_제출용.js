const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' '); // 첫번째

const mm = [];

for (let i = 1; i < input.length; i += 1) {
  if (input[i] !== '') { // 이거 처리해줘야하나..
    mm.push(input[i].split('').map((_) => Number(_)));
  }
}

const solution = (n, m, graph) => {
  const nx = [1, -1, 0, 0]; // 이게 가로 방향
  const ny = [0, 0, 1, -1]; // 이게 세로 방향으로 설정하자

  const queue = [];

  const dist = [...graph].map((line) => [...line].map((_) => 0));

  queue.push({
    iy: 0,
    ix: 0, // 처음 시작을 0, 0 으로
  });

  dist[0][0] = 1;

  while (queue.length !== 0) {
    // 여기서 일단 큐에 있는거 뽑아서
    const { ix, iy } = queue.shift();

    // 이걸 가지고 이제 방문 4방향으로
    for (let i = 0; i < 4; i += 1) {
      const x = ix + nx[i]; // 이게 가로 방향
      const y = iy + ny[i]; // 이게 세로 방향

      if (x >= 0
         && y >= 0
         && x < graph[0].length
         && y < graph.length
      ) {
        if (graph[y][x] === 1 && dist[y][x] === 0) {
          queue.push({
            ix: x,
            iy: y,
          });
          dist[y][x] = dist[iy][ix] + 1;
        }
      }
    }
  }

  return dist[n - 1][m - 1];
};

console.log(solution(n, m, mm));
