const a = () => {
    return 10;
}

test.each([
    10, 20, 30
])('test', (value) => {
    expect(a()).toBe(10);
});
