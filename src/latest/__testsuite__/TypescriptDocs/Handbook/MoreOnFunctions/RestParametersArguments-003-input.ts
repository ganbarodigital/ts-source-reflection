// this test proves that we support rest parameters to functions

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}