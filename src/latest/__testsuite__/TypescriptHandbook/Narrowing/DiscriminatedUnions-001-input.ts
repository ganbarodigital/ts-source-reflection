// this test proves that we can support literal types
// in an interface declaration

interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}