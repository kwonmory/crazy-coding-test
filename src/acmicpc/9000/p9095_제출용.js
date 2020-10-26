const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
    if (input[i] !== '') {
       numbers.push(input[i].split(' '));
    }
}

const solution = (input) => {
    let set = new Set();
    
    function go(item, list) {
        const sum = list.reduce((acc, v) => acc += v, 0);

        if (sum > input) return;

        if (sum === input) {
            set.add(list.toString());
            return;
        }

        go(item + 1, [...list, 1]);
        go(item + 2, [...list, 2]);
        go(item + 3, [...list, 3]);
    }

    go(0, []);
    return set.size;
}

numbers.forEach(v => {
    console.log(solution(Number(v)));
});