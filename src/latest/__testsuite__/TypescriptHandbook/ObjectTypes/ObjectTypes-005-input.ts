// this test proves that we support default values in
// destructed object parameters

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    // ...
}