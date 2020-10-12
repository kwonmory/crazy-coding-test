const nx = [0, 0, 1, -1];
const ny = [1, -1, 0, 0];

const solution = (list) => {
    const graph = [...list].map(v => v.split(''));
    const visit = [...graph].map(v => [...v].map(s => s === '0' ? -1 : 0));
    
    const queue = [];

    queue.push({x: 0, y: 0});
    visit[0][0] = 1;

    while(queue.length > 0) {
        const {x, y} = queue.shift();

        for(let i = 0; i < 4; i++) {
            const dx = x + nx[i];
            const dy = y + ny[i];

            if (dx >= 0 && dy >= 0 && dx < graph.length && dy < graph[0].length 
                    && graph[dx][dy] === '1' && visit[dx][dy] === 0) {
                queue.push({x: dx, y: dy});
                visit[dx][dy] = visit[x][y] + 1;
            }
        }
    }

    return visit[list.length - 1][list[0].length - 1];
}

test.each([
    [1, ['101010', '111111', '000001', '111111', '111111'], 10],
    [2, ['110', '010', '011'], 5]
])('미로 탈출 %d', (n, list, ans) => {
    expect(solution(list)).toBe(ans);
});