// this test proves that we support the 'never' return type

function explode(): never {
    throw "boom"!;
}