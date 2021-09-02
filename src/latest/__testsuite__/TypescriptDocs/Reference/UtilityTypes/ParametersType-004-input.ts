declare function f1(arg: { a: number; b: string }): void;

type T3 = Parameters<typeof f1>;