type Person = { age: number; name: string; alive: boolean };
type I2 = Person[keyof Person];