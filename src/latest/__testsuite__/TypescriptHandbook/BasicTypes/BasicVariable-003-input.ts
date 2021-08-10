// this test proves that we can create variables that are typed

interface Box {
    contents: unknown;
}

let x: Box = {
    contents: "hello world",
};