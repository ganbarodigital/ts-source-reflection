// this test proves that we support interfaces that extend
// more than one interface

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}