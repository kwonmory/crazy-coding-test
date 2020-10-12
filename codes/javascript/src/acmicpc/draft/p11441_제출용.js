const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input1 = input[1].split(' ');

const input2Linegth = Number(input[2]);

const input2 = [];

for (let i = 3; i < input2Linegth + 3; i++) {
    input2.push(input[i].split(' '));
}

const solution = (input1, input2) => {
    const ans = [];

    input2.forEach(([start, end]) => {
        ans.push(input1.slice(start-1, end).reduce((acc, v) => acc += v, 0));
    });
    return ans; 
}

console.log(solution(input1, input2));