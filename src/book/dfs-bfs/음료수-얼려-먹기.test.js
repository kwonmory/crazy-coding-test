
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const dfs = (graph, visit, start) => {
    const { x, y } = start;
    visit[x][y] = true;

    for(let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        
        if (nx >= 0 && ny >= 0 && nx < graph.length && ny < graph[0].length && visit[nx][ny] === false && graph[nx][ny] === '0') {
            visit[nx][ny] = true;
            dfs(graph, visit, {x: nx, y: ny});
        }
    }
}


const solution = (list) => {
    const graph = [...list].map(v => v.split(''));
    const visit = [...graph].map(v => [...v].map(s => s === '0' ? false : true));
    let ans = 0;

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (visit[i][j] === false) {
                ans++;
                dfs(graph, visit, {x: i, y: j});
            }
        }
    }

    return ans;
}



test.each([
    [['00110', '00011', '11111', '00000'], 3],
    [['001','010', '101'], 3]
])('음료수 얼려 먹기', (list, ans) => {
    expect(solution(list)).toBe(ans);
})

/*
    1. 상하좌우를 옮겨다닐 때, 범위를 신경 써야한다.
    2. 각 위치에 접근해야된다는 점을 인지하라
    3. 처음 그래프와 방문기록을 만들 때, 그래프와 방문기록 연관지어서 만들기(예로 그래프에서 벽인 부분은 방문기록에서 제외시키기)
*/