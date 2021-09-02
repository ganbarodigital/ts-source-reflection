type Person = { age: number; name: string; alive: boolean };
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];