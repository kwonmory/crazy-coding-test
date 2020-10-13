const solution = (input) => {
    input.sort((a, b) => a[1] - b[1]);
    
    return input.reduce((acc, [name, score]) => acc += `${name} `, '').trim();
}

test.each([
    [[['홍길동', 95], ['이순신', 77]], '이순신 홍길동']
])('성적이 낮은 순서로 학생 출력하기', (input, ans) => {
   expect(solution(input)).toBe(ans);
});