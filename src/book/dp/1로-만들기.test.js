const solution = (input) => {

    const array = [...Array.from({length: 30001})].map(_ => 0);

    array[0] = 0; // 보기 편하기 위함
    array[1] = 0; // 보기 편하기 위함

    for (let i = 2; i < input + 1; i++) {
        array[i] = array[i - 1] + 1;
        
        if (i % 2 === 0)
            array[i] = Math.min(array[i], array[Math.floor(i/2)] + 1);

        if (i % 3 === 0)
            array[i] = Math.min(array[i], array[Math.floor(i/3)] + 1);
        
        if (i % 5 === 0)
            array[i] = Math.min(array[i], array[Math.floor(i/5)] + 1);
    }

    return array[input];
}

test.each([
    [26, 3]
])('1로 만들기', (input, ans) => {
    expect(solution(input)).toBe(ans);
});

/*
    접근하는 방식을 bottom-up 이 더 생각하기 쉬우니 이거만 생각하자..ㅋㅋㅋㅋ 하나라도 잘해야지
    그리고 button-up의 핵심은 작은 숫자부터 생각하는 것이라고 보면 되겠다.
    1일 땐 뭐
    2일 땐 뭐
    3일 떈 뭐

    이를 위한 점화식이 필요!
*/