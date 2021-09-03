declare function f1(): { a: number; b: string };

type T4 = ReturnType<typeof f1>;