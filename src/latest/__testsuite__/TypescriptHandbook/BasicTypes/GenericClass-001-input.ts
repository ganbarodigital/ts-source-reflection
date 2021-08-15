// this test proves that we support:
//
// 1. type parameters on classes
// 2. class properties w/ a generic type
// 3. functions w/ a generic type

class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
}