const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const list = input[1].split(' ');

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

console.log(solution(list));