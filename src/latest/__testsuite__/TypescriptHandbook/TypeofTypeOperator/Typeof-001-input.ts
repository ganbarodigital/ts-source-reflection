function f() {
    return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;