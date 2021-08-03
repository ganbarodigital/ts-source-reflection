// this our first test that proves that we support the any type

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}