interface Box<Type> {
    contents: Type;
}
interface StringBox {
    contents: string;
}

let boxA: Box<string> = { contents: "hello" };


let boxB: StringBox = { contents: "world" };