// this test proves that we support optional properties
// in interfaces

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}