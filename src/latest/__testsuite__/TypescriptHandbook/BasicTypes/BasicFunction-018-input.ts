// this test proves that we can support a function type signature in
// a function definition

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}