// this test proves that we support a generic type constraint
// that relies on a function type signature

function filter2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
    return arr.filter(func);
}