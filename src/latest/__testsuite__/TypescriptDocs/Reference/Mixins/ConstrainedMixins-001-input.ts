class Sprite {
    name = "";
    x = 0;
    y = 0;

    constructor (name: string) {
        this.name = name;
    }
}

// This was our previous constructor:
type Constructor = new (...args: any[]) => {};
// Now we use a generic version which can apply a constraint on
// the class which this mixin is applied to
type GConstructor<T = {}> = new (...args: any[]) => T;

type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;
type Spritable = GConstructor<Sprite>;
type Loggable = GConstructor<{ print: () => void }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
        jump() {
            // This mixin will only work if it is passed a base
            // class which has setPos defined because of the
            // Positionable constraint.
            this.setPos(0, 20);
        }
    };
}