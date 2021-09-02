// this test proves that we support identifier aliases for
// properties in destructured object parameters

function draw({ shape: Shape, xPos: number = 100 /*...*/ }) {
    // ...
}