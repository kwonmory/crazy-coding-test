const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);

const solution = (N) => {
  const NUMBER_100 = 100;
  let result = 99;

  if (N < NUMBER_100) {
    return N;
  }

  for (let currentNumber = NUMBER_100; currentNumber <= N; currentNumber += 1) {
    const number2string = currentNumber.toString().split('');
    const diffNumber = [];

    for (let digitIndex = 0; digitIndex < number2string.length - 1; digitIndex += 1) {
      diffNumber.push(number2string[digitIndex] - number2string[digitIndex + 1]);
    }

    if (diffNumber.every((v) => v === parseInt(diffNumber[0], 10))) {
      result += 1;
    }
  }

  return result;
};

console.log(solution(num));
