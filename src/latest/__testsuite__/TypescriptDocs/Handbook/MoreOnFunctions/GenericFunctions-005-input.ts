function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

const a = firstElement1([1,2,3]);
const b = firstElement2([1,2,3]);