const solution = (list) => {
    const circle = [...list].map((_, index) => ({
        index: index + 1,
        order: _
    }));

    const ans = [];

    do {
        if (circle[0] === undefined) {
            break;
        }

        const {index, order} = circle[0];
        circle.shift();
        ans.push(index);
        
        let limit = order > 0 ? order -1 : Math.abs(order);

        for(let i = 0; i < limit; i++) {
            if (order > 0) {
                const temp = circle.shift();
                circle.push(temp);
                continue;
            }
            const temp = circle.pop();
            circle.unshift(temp);
        }
    } while (circle.length > 0);
    return ans;
}

test.each([
    [[3,2,1,-3,-1], [1,4,5,3,2]]
])('풍선 터뜨리기', (input, ans) => {
    expect(solution(input)).toEqual(ans);
});